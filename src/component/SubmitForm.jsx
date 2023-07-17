import React from "react";

const SubmitForm = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="heading">
          <span>arrow</span>
          <h1>Submit form</h1>
          <form className="sm:w-full sm:px-2 md:w-1/2">
            <div className="form__input--field flex flex-col justify-start mb-2">
              <p className="mb-3">Full Name</p>
              <input placeholder="Full name" className="p-2" />
            </div>
            <div className="form__input--field flex flex-col justify-start mb-2">
              <p className="mb-3">Email</p>
              <input placeholder="Email" className="p-2" />
            </div>
            <div className="form__input--field flex flex-col justify-start mb-2">
              <p className="mb-3">Upload JSON File</p>
              <div className="box sm:m-6 flex flex-col justify-start items-center">
                <span>icon</span>
                <p>Browse File</p>
              </div>
            </div>
            <div className="p-2 flex justify-start items-start">
              <textarea rows="4" cols="50" placeholder="name" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitForm;
