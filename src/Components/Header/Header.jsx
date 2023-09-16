import React from "react";
import "./Header.css";
import image from "../Images/food2.jpg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header_container section__padding">
      <section className="header_container-section">
        <div className="header_container-section_left">
          <h4>Chase the new Flavour</h4>
          <h1 className="heading">
            The key to <br /> Fine dining
          </h1>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <button className="explore" onClick={() => navigate("/menu")}>
            Explore Menu
          </button>
        </div>
        <div className="header_container-section_right">
          <img src={image} alt="" />
        </div>
      </section>
    </div>
  );
}
