import React, { useState } from "react";
import classes from "../../styles/form.module.css";
import { send } from "emailjs-com";

const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Santhini",
    message: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    send("service_i9c9ev6", "template_hy6uwym", toSend, "vxd8R3LWuvCnOJiJB")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({
          from_name: "",
          to_name: "Santhini",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input
          type="text"
          placeholder="Your Name"
          name="from_name"
          value={toSend.from_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
