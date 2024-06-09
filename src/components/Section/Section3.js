"use client";
import apiClient from "@/api/client";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section3 = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await apiClient.post("/form/create-form", {
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      service: inputs.service,
    });
    if (result.ok) {
      toast.success("Success. Form submitted!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Error. Retry", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <section className="relative flex lg:h-[810px] bg-section2-bg bg-cover bg-center bg-no-repeat">
      <ToastContainer />
      <div className="absolute inset-0  bg-black/20"></div>
      <div className="relative lg:flex  m-auto max-w-screen-2xl px-4 py-10 sm:px-6   lg:px-8 lg:mt-40 text-white">
        {/* info  */}
        <div className="flex flex-col lg:w-[150%]">
          <p className="text-3xl mt-2 font-medium lg:text-[40px] lg:w-[70%]  leading-none">
            We Serve You Better With All Our Experience
          </p>
          <p className="text-sm mt-5 text-justify lg:w-[65%] lg:text-lg">
            With our extensive experience in the travel industry, we are
            dedicated to providing you with exceptional service. Our knowledge
            and expertise allow us to offer tailored solutions, ensuring a
            smooth and enjoyable travel experience. Trust us to handle your
            travel needs with care and efficiency.
          </p>

          <div className="mt-5 lg:mt-10">
            <p className="text-lg lg:text-3xl">Do you find forms boring?</p>
            <div className="flex items-center gap-5">
              <p className="lg:text-[30px] font-semibold">Call Us</p>
              <Image
                src="/icons/call1.png"
                height={48}
                width={48}
                className="h-7 w-7 lg:h-[48px] lg:w-[48px]"
              />
              <a
                href="tel:+971547082256"
                className="text-yellow font-bold lg:text-[38px] no-underline"
              >
                (+971) 046-121-340
              </a>
            </div>
          </div>
        </div>
        {/* form  */}
        <div className="w-full mt-10 lg:mt-0">
          <p className="text-xl lg:text-3xl font-bold">Have Questions</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-5">
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-white rounded-[5px] placeholder-white lg:text-lg font-poppins"
                />
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  value={inputs.phone}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-white rounded-[5px] placeholder-white lg:text-lg font-poppins"
                />
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="Email ID"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-white rounded-[5px] placeholder-white lg:text-lg font-poppins"
                />
              </div>
              <div className="mt-2">
                <select
                  id="service"
                  name="service"
                  value={inputs.service}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-white bg-transparent border-white rounded-[5px] placeholder-white lg:text-lg font-poppins"
                >
                  <option value="Visa Consultation" className="text-black">
                    Visa Consultation
                  </option>
                  <option value="Holidays" className="text-black">
                    Holidays
                  </option>

                  <option value="UAE Activities" className="text-black">
                    UAE Activities
                  </option>
                  <option value="B2B" className="text-black">
                    B2B
                  </option>
                  <option value="" disabled selected hidden>
                    Select Service
                  </option>
                </select>
              </div>
            </div>
            <div className=" mt-6">
              <button className=" cursor-pointer w-full px-6 py-2 leading-5 font-medium text-lg lg:text-2xl text-black transition-colors duration-200 transform bg-white rounded-md  focus:outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section3;
