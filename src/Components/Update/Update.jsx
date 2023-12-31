import React, { useContext } from "react";
import "./Update.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import i1 from "../Images/food1.webp";
// import i1 from '../Images/food1.jpg'
import i2 from "../Images/food2.jpg";
import i3 from "../Images/food3.jpg";
import i4 from "../Images/food4.jpg";
import i5 from "../Images/food5.jpg";
import i6 from "../Images/food6.jpg";
import i7 from "../Images/food7.jpg";
import { MyContext } from "../../../MyContext";
import MediaCard from "../Card";
// import i2 from '../Images/food2.jpg'
const images = [i1, i2, i3, i4, i5, i6, i7];
const Update = () => {
  const { recipes } = useContext(MyContext);
  return (
    <div className="update section__padding">
      <div className="update_heading">
        <h3>Blogs</h3>
        <h1>Gericht Updates</h1>
      </div>
      <div className="update_images">
        <Splide
          className="update_images_splide"
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 3,
            autoScroll: {
              speed: 1,
            },
            arrows: false,
            autoplay: true,
            interval: 3000,
            pagination: false,
          }}
        >
          {recipes.map((item, i) => (
            <SplideSlide key={i} className="update_images_image">
              <MediaCard item={item} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Update;
