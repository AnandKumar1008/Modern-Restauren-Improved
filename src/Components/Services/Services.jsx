import React, { useState } from "react";
import mocktail from "../Images/mocktail.webp";
import desert from "../Images/desert.webp";
import maincourse from "../Images/maincourse.jpg";
import "./Services.css";
const style = {
  opacity: 0.5,
};
const Services = () => {
  const [img, setImg] = useState(maincourse);
  const [opacity, setOpacity] = useState({
    maincourse: 1,
    mocktail: 0,
    desert: 0,
  });

  return (
    <>
      <div className="modern_restaurent-services_heading">
        <h3>Serving Quality</h3>
        <h1>We at Krishna Are Serving Our Customers For Over A Decade</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          iste eligendi numquam minus nam, praesentium rem repudiandae, ipsa
          velit rerum porro temporibus ipsum consequatur.
        </p>
        <div className="modern_restaurent-services_heading_button">
          <button>Read More</button>
          <button>Contact us</button>
        </div>
      </div>
      <div
        className="modern_restaurent-services"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* <img src={img} alt="" className="image-transition" /> */}
        <div className="modern-restaurent_services_recipes">
          <div
            className="modern_restaurent-services_item maincourse"
            style={img === maincourse ? style : {}}
            onMouseOver={() => {
              // setOpacity({ change, maincourse: 1 });

              setImg(maincourse);
            }}
          >
            {/* <img
              src={maincourse}
              alt=""
              style={{ opacity: opacity.maincourse }}
            /> */}
            <div className="modern_restaurent-text_changing">
              <h3>Main Course</h3>
              <p>
                Our menu includes options such as grilled steak with a side of
                roasted vegetables, creamy garlic butter shrimp pasta, tender
                roasted chicken with mashed potatoes, and a flavorful vegetarian
                stir-fry
              </p>
            </div>
          </div>

          <div
            className="modern_restaurent-services_item mocktail"
            style={img === mocktail ? style : {}}
            onMouseOver={() => {
              // setOpacity({ change, mocktail: 1 });

              setImg(mocktail);
            }}
          >
            {/* <img src={mocktail} alt="" style={{ opacity: opacity.mocktail }} /> */}
            <div className="modern_restaurent-text_changing">
              <h3>Mocktail</h3>
              <p>
                A mocktail is a non-alcoholic cocktail typically made with fruit
                juices, syrups, and other mixers, and can be just as delicious
                as its alcoholic counterpart.
              </p>
            </div>
          </div>
          <div
            className="modern_restaurent-services_item desert"
            style={img === desert ? style : {}}
            onMouseOver={() => {
              // setOpacity({ change, desert: 1 });

              setImg(desert);
            }}
          >
            {/* <img src={desert} alt="" style={{ opacity: opacity.desert }} /> */}
            <div className="modern_restaurent-text_changing">
              <h3>Dessert</h3>
              <p>
                The scorching sun beats down on the endless dunes, a barren
                landscape stretching out before you. The only sound is the
                whisper of sand being carried by the hot desert wind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
