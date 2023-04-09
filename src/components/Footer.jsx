import React from "react";


const Footer = () => {
  return (
 <div className="bg-black">
       <div className="text-white p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-16 mt-6 px-2 lg:px-14 gap-4">
      <div>
        <h3 className="text-2xl font-bold mb-2">MRjobHub</h3>
        <p>
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <span className="text-2xl font-bold">Services</span>
        <a className="mt-2">Branding</a>
        <a className="mt-2">Design</a>
        <a className="mt-2">Marketing</a>
        <a className="mt-2">Advertisement</a>
      </div>
      <div className="flex flex-col mb-2">
        <span className="text-2xl font-bold">Company</span>
        <a className="mt-2">About us</a>
        <a className="mt-2">Contact</a>
        <a className="mt-2">Jobs</a>
        <a className="mt-2">Press kit</a>
      </div>
      <div className="flex flex-col mb-2">
        <span className="text-2xl font-bold">Legal</span>
        <a className="mt-2">Terms of use</a>
        <a className="mt-2">Privacy policy</a>
        <a className="mt-2">Cookie policy</a>
      </div>
      <div className="flex flex-col mb-2">
        <span className="text-2xl font-bold">Contract</span>
        <a className="mt-2">Facebook</a>
        <a className="mt-2">Email</a>
        <a className="mt-2">Whats App</a>
      </div>
    </div>
    <hr className="p-2 text-white mx-2 lg:mx-14" />
    <div className="text-white text-sm font-bold flex justify-between items-center mx-2 lg:mx-14 pb-16 py-6">
        <div>
            <h2>&coppy;Coppyright 2023 bt Mahadi hasan</h2>
        </div>
        <div>
            <p>Powered by CareerHub</p>
        </div>
    </div>
 </div>
  );
};

export default Footer;
