import React from "react";
import "./style.css";
const SubmitForm = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center  px-5 w-full sm:w-[80%] md:px-10 md:w-[40%]">
          <div className="flex justify-start py-2 w-full">
            <span>
              <i class="fa-solid fa-arrow-left"></i>
            </span>
            <h1 className="ms-3 font-semibold sm:text-sm md:text-base">
              Submit form
            </h1>
          </div>

          <form className="w-full  my-4">
            <div className=" flex flex-col justify-start mb-2">
              <p className="mb-3 text-xm md:text-base text-[#292727]">
                Full Name
              </p>
              <input
                placeholder="Full name"
                className="p-2 placeholder:text-[#A0A0A0] bg-[#FAFAFA] rounded-md focus:outline-none"
              />
            </div>
            <div className=" flex flex-col justify-start mb-2">
              <p className="mb-3 text-[#292727]">Email</p>
              <div className="flex justify-between items-center ">
                <input
                  placeholder="Email"
                  className="w-[90%] p-2 placeholder:text-[#A0A0A0] bg-[#FAFAFA] rounded-l-md focus:outline-none"
                />{" "}
                <span className="w-[10%] p-2 text-[#A0A0A0] bg-[#FAFAFA] rounded-r-md">
                  <i class="fa-regular fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className=" flex flex-col justify-start mb-2 bg-[#FAFAFA]  ">
              <p className="mb-2 text-[#292727] ">Upload JSON File</p>
              <div className="mt-2 flex flex-col justify-start items-center border-dashed border-2 border-[#D9D9D9] py-6 md:p-10 ">
                <span className="text-[#4381FF] text-xl">
                  <i class="fa-solid fa-file-arrow-up"></i>
                </span>
                <p className="text-[#292727]">Browse File</p>
              </div>
            </div>

            <div className=" flex flex-col justify-start items-start ">
              <h4 className="text-[#292727] my-2">File Contents</h4>
              <textarea
                rows="5"
                className="mt-2 text-[#292727] w-full focus:outline-none bg-[#FAFAFA] "
              />
            </div>

            <div className="mt-3 p-5 flex justify-center items-center bg-[#F3F4F4]">
              <button className="  py-2 px-4 bg-[#3062C8] hover:bg-[#3063c88d]  text-white w-full md:w-1/3 rounded-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitForm;
