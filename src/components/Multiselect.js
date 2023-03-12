import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Multiselect } from "multiselect-react-dropdown";



const MultiselectInput = () => {

  const [item, setItem] = useState("");

  const data = [
    { language: 'English', id: 1 },
    { language: 'Hindi', id: 2 },
    { language: 'Chinese', id: 3 },
    { language: 'Russian', id: 4 },
    { language: 'French', id: 5 },
    { language: 'Spanish', id: 6 },
  ]

  const [options] = useState(data);



  //handle events//
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  //handle submit
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <div className="multi-select">
      <div className='font-bold text-3xl py-4 border border-y-8 text-center text-gray-500'>Multiselect Select</div>
      <div className='container bg-gray-200'>
        <div className='col-span-4'>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
            <div className="w-1/2 m-auto">
              <label className="block mb-4">Language Prefer:</label>
              <Multiselect options={options} displayValue="language"
              // {...register("language", { required: 'Language is required' })}

              />
              {/* <div className="text-xs text-red-500">
                  {errors.language && <span>{errors.language.message}</span>}
                </div> */}
            </div>
            <input
              className="fullGrid w-auto text-white mt-8 px-4 mt-4 py-2 m-auto bg-black rounded justify-center"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default MultiselectInput