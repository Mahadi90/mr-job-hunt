import React, { useState } from "react";
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

  //  for the filter job
  const [filterValue, setFilterValue] = useState('all')

  const filteredJobs = filterValue === 'all' ? initialJobs : initialJobs.filter(job => job.remoteorOnsite === filterValue);


  const handleFilterClick = (value) => {
    setFilterValue(value);
  };


  return (
    <div>
      <div className='flex justify-around pt-12 pb-24 bg-gradient-to-r from-gray-300 to-gray-100'>
      <Lottie className='w-40 h-14' animationData={banner} loop={true} />
      <h2 className="text-2xl font-bold text-center"> 
        Applied Job
      </h2>
      <Lottie className='w-40 h-14' animationData={banner} loop={true} />
      </div>
      <h2 className="text-violet-500 text-2xl font-semibold p-2">{(initialJobs.length > 0 ? 'You have applied these Job' : 'You have not apply any job yet')}</h2>
      <div className="mt-12 mb-2 px-44 flex gap-2 justify-end">
      <button onClick={() => handleFilterClick('Onsite')} className="bg-gray-200 px-4 py-2 font-bold rounded-md text-black">Onsite</button>
        <button onClick={() => handleFilterClick('Remote')} className="common-btn">Remote</button>
      </div>
      <div className="my-2 container flex flex-col gap-6">
        {filteredJobs.map((myjobs) => (
          <MyApplyJob key={myjobs.id} myjobs={myjobs}></MyApplyJob>
        ))}
      </div>
    </div>
  );
};

export default ApliedJob;
