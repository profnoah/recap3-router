import React from "react";
import Courses from "../components/Courses";
import Slider from "../components/Slider";
import courseData from "../data/courseData";

const Home = () => {
  return (
    <div>
      <Slider />
      <Courses data={courseData} />
    </div>
  );
};

export default Home;
