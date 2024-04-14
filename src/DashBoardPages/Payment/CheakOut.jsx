import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from '../../hooks/useCart';
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheakOut = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState('');
  const [tid,setTid]=useState('')
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // console.log(totalPrice);


  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
   if(totalPrice>0){
    axiosSecure.post('/create-payment-intent', { price: totalPrice })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch(error => {
        console.error("Error fetching client secret:", error);
      });
   }
  }, [axiosSecure, totalPrice]);

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!stripe) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
      if (error) {
        console.log("Payment error:", error);
        setError(error.message);
      } else {
        console.log("Payment method:", paymentMethod);
        setError("");
      }
    } catch (error) {
      console.error("Error creating payment method:", error);
      setError("Error creating payment method");
    }
    const {paymentIntent,error:confirmError}= await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details:{
          email:user?.email || 'Anonymous',
          name:user?.displayName || 'Anonymous'
        }

      }
    })
    if(confirmError){
      console.log('confirmation error');
    }else{
      console.log('success',paymentIntent);
      if(paymentIntent.status
        ==='succeeded'){
        console.log('id',paymentIntent.id);
        setTid(paymentIntent.id);
        const name = cart.map(item => item.name);
        console.log(name);
        const payment ={
          email:user.email,
          price:totalPrice,
          name:name,
          transactionId:paymentIntent.id,
          date: new Date(),
          cartId:cart?.map(item=>item._id),
          // category:cart?.map(item=>item.category),
         
          menuId:cart?.map(item=>item._id),
          status:'pending'

        }
        
        try {
          const res = await axiosSecure.post('/payments', payment);
          console.log(res);
          if (res.data?.paymentResult?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your payment has been successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/payment");
          }
          // Handle success response from backend
        } catch (error) {
          console.error('Error posting payment data:', error);
          // Handle error response from backend
        }
      }
    }
  };

  return (
   <div>
    <div>
    <div>
      <form onSubmit={handelSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-accent" type="submit" disabled={!stripe||!clientSecret}>
          Pay
        </button>
        <p className="text-red "> {error}</p>
        {tid&&<p>Your transaction id: {tid}</p>}
     
      </form>
      {/* <div>
        <Navigate to='/dashBoard/payment'>
        <button className=" btn">Go to payment </button>
        </Navigate>
      </div> */}
    </div>
    </div>
    <div>
       
    </div> 
   </div>
  );
};

export default CheakOut;
