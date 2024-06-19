import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "./Contact.css";
import { motion } from "framer-motion";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      toast.error("Please provide all fields");
      return;
    }

    const templateParams = {
      name,
      email,
      message: msg,
    };

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        templateParams,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Your message sent successfully");
          setName("");
          setEmail("");
          setMsg("");
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <motion.img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contact"
                    className="image"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <motion.div
                className="card2 d-flex card border-0 px-4 py-5"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="http://www.linkedin.com/in/yashwardhan-d-a2169a229"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://github.com/yashbo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://www.facebook.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsInstagram color="blue" size={30} className="ms-2" />
                      </a>
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
