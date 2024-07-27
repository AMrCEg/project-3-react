import React, { useState } from "react";

const LoginFormChallenge = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joiningNewsletter: false,
  });

  const hadelChange = (event) => {
    setFormData((prevformData) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password || !formData.passwordConfirm) {
      alert("Please fill out all required fields");
      return;
    }
    // Submit form data to server
    if (formData.password === formData.passwordConfirm) {
      console.log(formData);
      console.log("successfully signing up");
    } else {
      console.log("passwords not match");
      return;
    }
    if (formData.joiningNewsletter === true) {
      console.log("Thanks for signing up for our newsletter");
    }
    // clear input fields
    setFormData({
      email: "",
      password: "",
      passwordConfirm: "",
      joiningNewsletter: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Type Email"
        onChange={hadelChange}
        name="email"
        value={formData.email}
      />
      <input
        type="password"
        placeholder="Type Password"
        onChange={hadelChange}
        name="password"
        value={formData.password}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={hadelChange}
        name="passwordConfirm"
        value={formData.passwordConfirm}
      />

      <input
        type="checkbox"
        id="joiningNewsletter"
        onChange={hadelChange}
        name="joiningNewsletter"
        checked={formData.joiningNewsletter}
      />
      <label htmlFor="joiningNewsletter">I want to join the newsletter</label>
      <br />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default LoginFormChallenge;
