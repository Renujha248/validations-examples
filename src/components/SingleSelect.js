import React, { useState } from "react";
import { useForm } from "react-hook-form";



const SingleSelect = () => {

  const [fromDate, setFromDate] = useState("2000-01-01");
  const date = new Date();


  const [item, setItem] = useState("");
  const [itembox, setItemBox] = useState([]);


  const itemList = () => {
    setItemBox((newData) => {
      return [...newData, item];
    });
  };




  //handle events//
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  //handle submit
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <div>
      <div className='font-bold text-3xl py-4 border border-y-8 text-center text-gray-500'>Single Select</div>
      <div className='container grid grid-cols-5 bg-gray-300'>
        <div className='col-span-4'>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 mb-2 w-50 m-auto">
            </div>
            <div className="grid grid-cols-1 mt-10 p-4">
              <div className="margin">
                <label>No. of Passenger</label>
                <div className="w-full border border-1 border-dark rounded p-2">
                  <select className="w-full border-0 outline-0"
                    {...register("noOfPassenger", { required: 'No Of Passenger is required' })}
                  >
                    <option value=''>Choose one</option>
                    <option value='2'>2</option>
                    <option value='4'>4</option>
                    <option value='6'>6</option>
                    <option value='8'>8</option>
                  </select>
                </div>
                <div className="text-xs text-red-500">
                  {errors.noOfPassenger && <span>{errors.noOfPassenger.message}</span>}
                </div>
              </div>

              <div className="margin1">
                <label>No. of Cabbies</label>
                <div className="w-full border border-1 border-dark rounded p-2">
                  <select className="w-full border-0 outline-0"
                    {...register("noOfCabbies", { required: 'No Of Cabbies is required' })}
                  >
                    <option value=''>Choose one</option>
                    <option value='2'>2</option>
                    <option value='4'>4</option>
                    <option value='6'>6</option>
                    <option value='8'>8</option>
                  </select>
                </div>
                <div className="text-xs text-red-500">
                  {errors.noOfCabbies && <span>{errors.noOfCabbies.message}</span>}
                </div>
              </div>
              <div className="margin">
                <label>No. of Luggage</label>
                <div className="w-full border border-1 border-dark rounded p-2">
                  <select className="w-full border-0 outline-0"
                    {...register("noOfLuggage", { required: 'No Of Luggage is required' })}
                  >
                    <option value=''>Choose one</option>
                    <option value='2'>2</option>
                    <option value='4'>4</option>
                    <option value='6'>6</option>
                    <option value='8'>8</option>
                  </select>
                </div>
                <div className="text-xs text-red-500">
                  {errors.noOfLuggage && <span>{errors.noOfLuggage.message}</span>}
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
  )
}

export default SingleSelect