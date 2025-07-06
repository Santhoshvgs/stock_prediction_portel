import React from "react";

const Button = (props) => {
  return (
    <>
      <a className={`${props.class}`} href="#">
        {props.Text}
      </a>
      
      
    </>
  );
};

export default Button;
