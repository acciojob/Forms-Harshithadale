import React from "react";
import Card from "./Card";

function Form() {
  return (
    <div id="form-link">
      <Card>
        <form id="info-form">
          <label htmlFor="full_name">Name:</label>
          <input id="full_name" type="text" style={{ width: "200px" }} />
          <br />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" style={{ width: "200px" }} />
          <br />
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" style={{ width: "200px" }} />
          <br />
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            id="password_confirmation"
            type="password"
            style={{ width: "200px" }}
          />
          <br/>
          <button id="submit" type="submit">Submit</button>
        </form>
      </Card>
    </div>
  );
}

export default Form;
