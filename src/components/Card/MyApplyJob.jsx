import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

const MyApplyJob = ({ myjobs }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    location,
    remoteorOnsite,
    fullTimeOrPartTime,
    salary,
    id,
  } = myjobs;

  return (
    <div className="flex w-3/4 mx-auto gap-6 border p-6 items-center rounded">
      <img className="w-44 rounded h-44" src={companyLogo} alt="" />
      <div>
        <h2 className="text-xl my-2 font-bold text-gray-800">{jobTitle}</h2>
        <p className="text-gray-500 font-semibold">{companyName}</p>
        <div className="flex gap-4 my-2">
          <button className="border border-violet-400 px-2 rounded text-violet-500 font-semibold">
            {remoteorOnsite}
          </button>
          <button className="border border-violet-400 px-2 rounded text-violet-500 font-semibold">
            {fullTimeOrPartTime}
          </button>
        </div>
        <div className="flex gap-6 my-2 mt-4 text-gray-500 font-semibold">
          <p className="flex">
            <MapPinIcon className="h-6 w-6 text-gray-400 mr-2" />
            {location}
          </p>
          <p className="flex">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-400 mr-2" />
            {salary}
          </p>
        </div>
      </div>
      <div className="ms-auto">
        {" "}
        <Link to={`/${id}`}><button className="common-btn">View details</button></Link>
      </div>
    </div>
  );
};

export default MyApplyJob;
