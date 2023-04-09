import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import SingleCategory from "./Card/SingleCategory";
const Home = () => {

const [category, setCategory] = useState([]);

useEffect(() => {
    fetch('jobCategory.json').then(res => res.json()).then(data => setCategory(data))
},[])

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

      {/* Features job section starts from here */}

      <div className="my-12">
        <h2 className="text-2xl font-bold text-center">Job Category List {category.length}</h2>
        <p className="text-center mt-2 text-gray-600">Explore thousands of job opportunities with all the information you need. Its your future</p>
      
      <div className="my-8 grid grid-cols-1 md:grid-cols-4 gap-6 px-2 lg:px-14">
        {
            category.map(singleCategory => <SingleCategory
            key={singleCategory.id}
            singleCategory={singleCategory}
            />)
        }
      </div>
      </div>
    </div>
  );
};

export default Home;
