import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn,facebookSignUp } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";
  const handelGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        
      };
      axiosPublic.post("/users", userInfo).then((res) => {
       ////console.log(res.data);
        navigate(from, { replace: true });

      });
    });
  };

  // const handleFacebookSignUp = () => {
  //   facebookSignUp()
  //     .then((result) => {
  //       const userInfo = {
  //         email: result.user?.email,
  //         name: result.user?.displayName,
  //       };
  //       axiosPublic.post("/users", userInfo).then((res) => {
  //        ////console.log(res.data);
  //         navigate(from, { replace: true }); // Make sure to complete this line
  //       });
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error("Facebook sign up error:", error);
  //     });
  // };
  const handleFacebookSignUp = () => {
    facebookSignUp()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
         ////console.log(res.data);
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        // Handle specific error cases
        if (error.code === "auth/network-request-failed") {
          // Inform the user about the network issue
          console.error("Network request failed. Please check your internet connection.");
          // Optionally, provide an option for the user to retry sign-up
          // handleRetrySignUp();
        } else {
          // Handle other errors
          console.error("Facebook sign up error:", error);
        }
      });
  };
  
  

  return (
    <div className="flex gap-4 text-2xl">
      <div>
        <button onClick={handelGoogleSignIn}>
          <FaGoogle />
        </button>
      </div>
     <div>
      <button onClick={handleFacebookSignUp}>
      <FaFacebook />
      </button>
     </div>
      <FaGithub />
    </div>
  );
};

export default SocialLogin;
