import React, { useContext, useEffect, useState } from "react";
import img1 from "../Images/food1.webp";
import img2 from "../Images/food2.jpg";
import img3 from "../Images/food4.jpg";
import img4 from "../Images/food3.jpg";
import "./Blog.css";
import MediaCard from "../Card";
import { MyContext } from "../../../MyContext";
// import moment from "moment";
const accessKey = "zwTgacSWTV4UweSL2G1cKFPtPMtKQyJG7hBmlYtNKBo";
const query = "food";
const api = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
const arr = [img3, img4, img1, img2];
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, unde error accusamus blanditiis, iure fugit vitae dignissimos qui itaque repudiandae, ex totam! Tempore";
const title =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, modi.";
const Blog = () => {
  const { recipes } = useContext(MyContext);

  return (
    <div className="modern_restaurent-blog">
      <div className="modern_restaurent-blog_grid ">
        {recipes.map((item, i) => (
          <div key={i}>
            {/* <img src={img} alt="" />
            <div>
              <span>{new Date().toLocaleDateString()}</span>
              <span>lorem</span>
            </div>
            <h2>{title}</h2>
            <p>{text}...</p>
            <p>Read More</p> */}
            <MediaCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
