import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';

const initialValues = {
  otp_value: '',
};

const OTPPage = ({ otp }) => {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { values, handleChange } = useFormik({
    initialValues: initialValues,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log(otp);
    console.log(values.otp_value);
  
    try {
      const response = await fetch('http://localhost:5000/otp_verify/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'verification': otp,
        },
        body: JSON.stringify({
          otp: values.otp_value,
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        console.log('OTP is valid');
        toast.success(data.successful);
        setError('');
        setIsSuccess(true);
      } else {
        toast.error(data.error);
        setError('Invalid OTP');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error verifying OTP');
      setError('Error verifying OTP');
    }
  };
  

  return (
    <>
      {isSuccess ? (
        <Login />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Enter OTP</h2>

          <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto">
            <input
              type="text"
              name="otp_value"
              id="otp_value"
              value={values.otp_value}
              placeholder="Enter OTP"
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default OTPPage;
