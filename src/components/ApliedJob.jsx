import React from "react";
import { getStoredJob } from "../utils/fakeDb";
import { useLoaderData } from "react-router-dom";
import MyApplyJob from "./Card/MyApplyJob";
import Lottie from "lottie-react";
import banner from "../assets/banner.json"

const ApliedJob = () => {
  const allJob = useLoaderData();

  const savedJob = getStoredJob();
  const initialJobs = [];

  for (const ids in savedJob) {
    const findJob = allJob.find((aJob) => aJob.id == ids);
    if (findJob) {
      const quantity = savedJob[ids];
      findJob.quantity = quantity;
      initialJobs.push(findJob);
    }
  }
  //   console.log(initialJobs);
  return (
    <div>
      <div className='flex justify-around pt-12 pb-24 bg-gradient-to-r from-gray-300 to-gray-100'>
      <Lottie className='w-40 h-14' animationData={banner} loop={true} />
      <h2 className="text-2xl font-bold text-center"> 
        Applied Job
      </h2>
      <Lottie className='w-40 h-14' animationData={banner} loop={true} />
      </div>
      <div className="mt-12 mb-2 px-44 flex gap-2 justify-end">
        <button className="common-btn">Remote</button>
        <button className="bg-gray-200 px-4 py-2 font-bold rounded-md text-black">Onsite</button>
      </div>
      <div className="my-2 container flex flex-col gap-6">
        {initialJobs.map((myjobs) => (
          <MyApplyJob key={myjobs.id} myjobs={myjobs}></MyApplyJob>
        ))}
      </div>
    </div>
  );
};

export default ApliedJob;
