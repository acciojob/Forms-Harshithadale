import React from "react";
import Form from "./Form";

function Card({children}) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    width: "500px",
    margin: "20px auto",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };
  return (
    <div style={cardStyle}>
        {children}
    </div>
  );
}

export default Card;
