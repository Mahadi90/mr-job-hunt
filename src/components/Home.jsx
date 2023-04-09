import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import SingleCategory from "./Card/SingleCategory";
import { useLoaderData } from "react-router-dom";
import SingleFeature from "./Card/SingleFeature";
const Home = () => {

  const [category, setCategory] = useState([]);

  const features = useLoaderData();
 

  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);



  return (
    <div>
      {/* main header section starts from here */}

      <div className="lg:flex justify-between items-center container">
        <div>
          <h1 className="text-7xl font-bold">
            One Step Closer To Your <br />{" "}
            <span className="text-violet-400">Dream Job</span>
          </h1>
          <p className="my-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="common-btn">Get Started</button>
        </div>
        <div className="h-full w-full mt-4 md:mt-0">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>

      {/* main header section ends from here */}

      {/* Job category section starts from here */}

      <div className="my-16">
        <h2 className="text-2xl font-bold text-center">Job Category List</h2>
        <p className="text-center mt-2 text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="my-8 grid grid-cols-1 md:grid-cols-4 gap-6 px-2 lg:px-14">
          {category.map((singleCategory) => (
            <SingleCategory
              key={singleCategory.id}
              singleCategory={singleCategory}
            />
          ))}
        </div>
      </div>

      {/* Job category section starts from here */}

      {/* Features job section starts from here */}

      <div className="my-16 container mt-24">
      <h2 className="text-2xl font-bold text-center">Featured Jobs</h2>
        <p className="text-center mt-2 text-gray-600">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 mt-16">
            {
                features.map(singleFeature => <SingleFeature
                key={singleFeature.id}
                singleFeature={singleFeature}
                />)
            }
        </div>
      </div>

      <button className="common-btn mx-auto block my-16">See All Jobs</button>
    </div>
  );
};

export default Home;
