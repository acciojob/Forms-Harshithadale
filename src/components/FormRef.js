import React from "react";
import Card from "./Card";
import { useRef } from "react";

function FormRef() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      confirmPassword:confirmPasswordRef.current.value
    };
    e.target.reset()

  };
  return (
    <div id="form-ref-link">
      <Card>
        <form id="info-form" onSubmit={handleSubmit}>
          <label htmlFor="full_name">Name:</label>
          <input id="full_name" type="text" style={{ width: "200px" }} ref ={nameRef}/>
          <br />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" style={{ width: "200px" }} ref={emailRef}/>
          <br />
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" style={{ width: "200px" }} ref = {passwordRef} />
          <br />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            id="password_confirmation"
            type="password"
            style={{ width: "200px" }} ref = {confirmPasswordRef}
          />
          <br />
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}

export default FormRef;
