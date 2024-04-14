import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your form submission logic goes here
    // For demonstration purposes, let's just show a SweetAlert
    Swal.fire({
      icon: "success",
      title: "Form Submitted!",
      text: "Thank you for your submission.",
    });

    // Reset the form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div>
      <div className="md:w-[480px] lg:w-[650px] bg-white p-4 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="md:flex md:gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered md:w-[215px] lg:w-[300px]"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="input input-bordered md:w-[215px] lg:w-[300px]"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <input type="submit" className="btn btn-accent mt-2" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
