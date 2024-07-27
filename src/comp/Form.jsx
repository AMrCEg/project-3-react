// 7:48:49 React forms intro
// 7:52:17 Watch for input changes in React
// 7:56:49 Form inputs practice
// 7:59:13 Forms state object
// 8:07:18 Controlled inputs
// 8:11:35 Forms in React

import React, { useState } from "react";

import "../index.css";

const Form = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: false,
    favLang: "",
    car: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // firstName != "" && console.log(`Your FirstName is :${firstName}`);
    // lastName != "" && console.log(`Your LastName is :${lastName}`);
    // using formData as object

    console.log(formData);

    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   comment: "",
    //   isFriendly: false,
    //   favLang: "",
    //   car: "",
    // });
  };

  // habdle all form element with one funcion
  // const handleChange = (event) => {
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [event.target.name]:
  //         event.target.type === "checkbox"
  //           ? event.target.checked
  //           : event.target.value,
  //     };
  //   });
  // };

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            // onChange={(event) => {
            //   // console.log(event);
            //   setFirstName(event.target.value);
            // }}
            // onChange={(event) => {
            //   setFormData((prevFormData) => {
            //     return { ...prevFormData, firstName: event.target.value };
            //   });
            // }}
            onChange={handleChange}
            //for the handlechange event to distinguish between which input it was that triggered that event name must equal state proparty
            name="firstName"
            //for make state Controlled inputs //you need to set the value of your inputs to be equal to your state that represents that input value
            value={formData.firstName}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            // onChange={(e) => {
            //   setLastName(e.target.value);
            // }}
            // onChange={(event) => {
            //   setFormData((prevFormData) => {
            //     return { ...prevFormData, lastName: event.target.value };
            //   });
            // }}
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            // onChange={(event) => {
            //   setFormData((prevFormData) => {
            //     return { ...prevFormData, email: event.target.value };
            //   });
            // }}
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <br />
          <br />
          {/* 8:11:35 Forms in React */}
          {/* textarea */}
          <textarea
            cols="21"
            rows="10"
            placeholder="Typr Your Comment"
            onChange={handleChange}
            name="comment"
            value={formData.comment}
          />
          <br />
          <br />
        </div>
        <br />
        <br />
        {/* checkbox */}
        <div>
          <input
            type="checkbox"
            id="isFriendly"
            // onChange={(event) => {
            //   setFormData((prevFormData) => {
            //     return {
            //       ...prevFormData,
            //       // isFriendly: !prevFormData.isFriendly,
            //       isFriendly: event.target.checked,
            //     };
            //   });
            // }}
            onChange={handleChange}
            name="isFriendly"
            checked={formData.isFriendly} // instead of value checkbox has checked
          />
          <label htmlFor="isFriendly">Are you Friendly</label>
        </div>
        <br />
        <br />

        {/* radio buttons */}
        <div>
          <p>Please select your favorite Web language:</p>

          <input
            type="radio"
            id="fav1"
            value="JS"
            // onChange={(e) =>
            //   setFormData((prevFormData) => {
            //     return {
            //       ...prevFormData,
            //       favLang: e.target.value,      // using e.target.value not e.target.checked
            //     };
            //   })
            // }
            onChange={handleChange}
            name="favLang"
            checked={formData.favLang === "JS"} // instead of value radio has checked and condition
          />
          <label htmlFor="fav1">JS</label>
          <br />

          <input
            type="radio"
            id="fav2"
            value="ReactJS"
            // onChange={(e) =>
            //   setFormData((prevFormData) => {
            //     return {
            //       ...prevFormData,
            //       favLang: e.target.value, // using e.target.value not e.target.checked
            //     };
            //   })
            // }
            onChange={handleChange}
            name="favLang"
            checked={formData.favLang === "ReactJS"} // instead of value radio has checked and condition
          />
          <label htmlFor="fav2">ReactJS</label>
          <br />

          <input
            type="radio"
            id="fav3"
            value="ReactNativ"
            // onChange={(e) =>
            //   setFormData((prevFormData) => {
            //     return {
            //       ...prevFormData,
            //       favLang: e.target.value,
            //     };
            //   })
            // }
            onChange={handleChange}
            name="favLang"
            checked={formData.favLang === "ReactNativ"} // instead of value radio has checked and condition
          />
          <label htmlFor="fav3">ReactNativ</label>
          <br />
        </div>
        <br />
        <br />
        {/*select  */}
        <div>
          <label htmlFor="cars">Choose A Car : </label>
          <select
            id="cars"
            // onChange={(e) =>
            //   setFormData((prevFormData) => {
            //     return {
            //       ...prevFormData,
            //       car: e.target.value,
            //     };
            //   })
            // }
            onChange={handleChange}
            name="car"
            value={formData.car}
          >
            {/* to solve i'm initializing
            state as an empty string for the favorite color but currently i
            don't have an option that represents the empty string value add  <option value="">--choose--</option>*/}
            <option value="">--choose--</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <br />
        </div>
        <br />
        <br />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {/* {firstName && <h1>Your FirstName is: {firstName}</h1>}
      {lastName && <h1>Your LastName is: {lastName}</h1>} */}
      {formData.firstName && <h1>Your FirstName is: {formData.firstName}</h1>}
      {formData.lastName && <h1>Your LastName is: {formData.lastName}</h1>}
      {formData.email && <h1>Your Email is: {formData.email}</h1>}
      {formData.comment && <h1>Your Comment is:{formData.comment}</h1>}
      <h1>{formData.isFriendly ? "Friendly" : "Not Friendly"}</h1>
      {formData.favLang && <h1>Your Fav. Language is: {formData.favLang}</h1>}

      {formData.car && <h1>Your Car is: {formData.car}</h1>}
    </>
  );
};

export default Form;
