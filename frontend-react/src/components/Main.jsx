import React from "react";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <div className="h1">Stock Prediction Portal</div>
          <p className="text-light lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            nihil tempora distinctio? Architecto ab nisi doloribus fugiat quidem
            totam, quasi esse, eum qui eligendi incidunt optio nostrum
            molestiae, iste ut! Molestiae mollitia, neque provident, cum a
            laborum dolore cumque laudantium adipisci vero libero dolores. Alias
            veritatis voluptatibus repudiandae voluptates repellat iste porro
            ipsum, magnam animi qui mollitia labore ut consequuntur libero
            soluta eaque vel, iusto rem eveniet enim dolorum in culpa maxime
            ipsa. Natus tenetur sit commodi blanditiis magni autem, cum,
            quisquam, magnam labore voluptatem debitis neque deserunt. Ipsam in
            maxime fugiat aut distinctio enim, architecto harum et dignissimos
            eum.
          </p>
          <Button Text="Login" className="btn btn-outline-warning" />
        </div>
      </div>
      <span className="d-flex justify-content-end mt-3 mb-3">
        <a href="#" className="text-muted">
          Back to top
        </a>
      </span>
    </>
  );
};

export default Main;
