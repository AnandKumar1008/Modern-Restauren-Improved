import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import i1 from "../Images/gallery01.png";
import i2 from "../Images/gallery02.png";
import i3 from "../Images/gallery03.png";
import i4 from "../Images/gallery04.png";
import "./Instagram.css";
import { useNavigate } from "react-router-dom";
const key = "d1943702de584b37bfdf4bcc10b27c8f";
const cuisine = "italian";
const url = `https://api.spoonacular.com/recipes/search?apiKey=${key}&cuisine=${cuisine}`;
// import i5 from '../Images/gallery05.png'
const src = "https://spoonacular.com/recipeImages/";
const gallery = [i1, i2, i3, i4];
const Instagram = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.results || []);
      console.log(data.results);
    };
    getData();
  }, []);
  return (
    <div className="instargram section__padding">
      <div className="instagram_left_half">
        <h4>Instagram</h4>
        <h2>Photo Gallery</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          facilis non voluptatem, exercitationem voluptas culpa labore aut
        </p>
        <button style={{ cursor: "pointer" }} onClick={() => navigate("/blog")}>
          View More
        </button>
      </div>
      <div className="instagram_right_half">
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            type: "loop",
            autoplay: true,
            arrows: false,
            autoScroll: {
              speed: 1,
            },
            interval: 2000,
          }}
        >
          {data.map((item, i) => (
            <SplideSlide key={i}>
              <img src={src + item.image} alt="" style={{ height: "100%" }} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Instagram;
