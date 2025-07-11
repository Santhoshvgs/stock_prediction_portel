import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      <Link className={`${props.class}`} to={props.url}>
        {props.Text}
      </Link>
      
      
    </>
  );
};

export default Button;
