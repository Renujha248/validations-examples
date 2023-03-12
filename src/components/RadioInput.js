import React, { useState } from "react";
import { useForm } from "react-hook-form";


const RadioInput = () => {

  //handle events//
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  //handle submit
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <div>
      <div className='font-bold text-3xl p-4 border border-y-8 text-center text-gray-500'>Radio Input</div>
      <div className='container grid grid-cols-5'>
        <div className='col-span-4'>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 mt-10 p-4">
                <div className="grid grid-cols-2">
                  <h2 className="fullGrid font-bold">Gender</h2>
                  <div className="d-flex items-center">
                    <label className="m-0 mr-4" for="male">
                      Male
                    </label>
                    <input
                      className="w-4 h-4"
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      {...register("genderType", { required: true })}
                    />

                    <div className="text-xs text-red-500">
                    </div>
                  </div>
                  <div className="d-flex items-center">
                    <label className="m-0 mr-4" for="female">
                      Female
                    </label>
                    <input
                      className="w-4 h-4"
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      {...register("genderType", { required: true })}

                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 margin1 ">
                  <h2 className="fullGrid font-bold mb-1">Trip Type</h2>
                  <div className="d-flex items-center">
                    <label className="m-0 mr-4" for="personal">
                      Personal
                    </label>
                    <input
                      className="w-4 h-4"
                      type="radio"
                      id="personal"
                      name="action"
                      value="Personal"
                      {...register("tripType", { required: true })}

                    />
                  </div>
                  <div className="d-flex items-center">
                    <label className="m-0 mr-4" for="corporate">
                      Corporate
                    </label>
                    <input
                      className="w-4 h-4"
                      type="radio"
                      id="corporate"
                      name="action"
                      value="Corporate"
                      {...register("tripType", { required: true })}
                    />
                  </div>
                </div>
                
                <div className="grid margin1">
                  <label className="font-bold mb-1">Time</label>
                  <div className="w-full border border-1 border-dark rounded">
                    <input
                      type="datetime-local"
                      className="w-full border-0 outline-0"
                      {...register("dateTime", { required: true })}
                    />
                  </div>
                </div>
                <div>
                </div>
              </div>
              <input
              className="fullGrid w-auto mx-auto px-4 mt-4 py-2 bg-black text-white rounded m-auto"
              type="submit"
              value="Submit"
            />
            </form>
          </div>
        </div>
      </div>
    </div>)
}

export default RadioInput