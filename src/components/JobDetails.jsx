import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const detailsData = useLoaderData();
  // console.log(detailsData)

  const params = useParams();
  // console.log(params.id)

  const [job, setJob] = useState({});

  useEffect(() => {
    if(detailsData && params.id){
      const foundDetails = detailsData.find((details) => details.id == params.id);
    setJob(foundDetails);
    }
  }, []);

  // console.log(job);

  return (
    <div>
    <h2 className="text-2xl font-bold text-center pt-12 pb-24 bg-gradient-to-r from-slate-400 to-slate-200">
      Job Details
    </h2>
    <div className="lg:flex px-2 lg:px-14 gap-6 my-16">
      <div className="w-full">
        <p className="mt-4">
          <span className="font-bold text-lg">Job Description:</span>
          {job.jobDescription}
        </p>
        <p className="mt-4">
          <span className="font-bold text-lg">Job Responsibility:</span>
          {job.jobResponsibility}
        </p>
        <p className="flex flex-col mt-4">
          <span className="font-bold text-lg">Educational Requirements:</span>
          {job.educationalRequirements}
        </p>
        <p className="flex flex-col mt-4">
          <span className="font-bold text-lg">Experiences:</span>
          {job.experiences}
        </p>
      </div>

      <div className="bg-gray-100 w-[50%] py-4 px-2 rounded-lg">
        <h2 className="text-2xl font-bold my-4">Job Details</h2>

        <hr className="border-gray-400 my-2" />

        <p className="my-2 text-gray-500 flex">
          <CurrencyDollarIcon className="h-6 w-6 text-indigo-400 mr-2" />
          <span
            className="font-bold 
            text-gray-500"
          >
            Salary
          </span>
          : {job.salary}
        </p>

        <p className="my-2 text-gray-500 flex">
          <BriefcaseIcon className="h-6 w-6 text-indigo-400 mr-2" />
          <span
            className="font
            -bold text-gray-500"
          >
            Job Title
          </span>
          : {job.jobTitle}
        </p>

        <h3 className="text-2xl font-bold my-4">Contact Information</h3>

        <hr className="border-gray-400 my-2" />

        <p className="my-2 text-gray-500 flex">
            <PhoneIcon className="h-6 w-6 text-indigo-400 mr-2" />
            <span className="font-bold text-gray-500">Phone</span>:{" "}
            {job.phone}
          </p>

          <p className="my-2 text-gray-500 flex">
            <EnvelopeIcon className="h-6 w-6 text-indigo-400 mr-2" />
            <span
              className="font-bold 

              text-gray-500"
            >
              Email
            </span>
            : {job.email}
          </p>

        <p className="my-2 text-gray-500 flex">
          <MapPinIcon className="h-6 w-6 text-indigo-400 mr-2" />
          <span className="font-bold text-gray-500">Address</span>:
          {job.location}
        </p>

        <button className="common-btn w-96 mt-12">Apply Now</button>
      </div>
    </div>
  </div>
  );
};

export default JobDetails;
