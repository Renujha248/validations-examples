import React from 'react'
import { Formik, Form, Field } from 'formik';


const FormValidation = () => {

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  // function validateUsername(value) {
  //   let error;
  //   if (value === 'admin') {
  //     error = 'Nice try!';
  //   }
  //   return error;
  // }

  function validateUsername(value) {
    let error;
    if (!value) {
      error = 'User Name Required';
    }
    return error;
  }

  function validateMobile(value) {
    let error;
    if (!value) {
      error = 'mobile number Required'
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = 'Password Required'
    }
    return error;
  }


  return (
    <div>
      <div className='font-bold text-3xl p-4 border border-y-8 text-center text-gray-500'>Form Validation</div>
      <div className='container'>
        <div className='mt-8'>
          <div>
            <h1 className='text-3xl p-4 text-center font-bold'>Signup</h1>
            <Formik
              initialValues={{
                username: '',
                email: '',
                mobile: '',
                password: '',
              }}
              onSubmit={values => {
                const onSubmit = data => alert(JSON.stringify(data));
                // console.log(values);
                alert(JSON.stringify(values))
              }}
            >
              {({ errors, touched, isValidating }) => (
                <Form>
                  <div className='grid grid-cols-1 w-1/2 m-auto'>
                    <Field className='border border-2 p-2' name="email" validate={validateEmail} />
                    {errors.email && touched.email && <div className='text-red-500 text-xs'>{errors.email}</div>}
                    <Field className='border border-2 mt-4 p-2' name="username" validate={validateUsername} />
                    {errors.username && touched.username && <div className='text-red-500 text-xs'>{errors.username}</div>}
                    <Field className='border border-2 mt-4 p-2' name="mobile" validate={validateMobile} />
                    {errors.mobile && touched.mobile && <div className='text-red-500 text-xs'>{errors.mobile}</div>}
                    <Field className='border border-2 mt-4 p-2' name="password" validate={validatePassword} />
                    {errors.password && touched.password && <div className='text-red-500 text-xs'>{errors.password}</div>}

                  </div>
                  <div className='text-center mt-4'>
                    <button className=' bg-black text-white px-4 py-1 rounded hover:bg-green-500 w-auto text-center' type="submit">Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormValidation






