import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import Particle from "../Components/Particle";

const initialValues = {
  otp_value: "",
};

const OTPPage = ({ otp }) => {
  const [error, setError] = useState("");
  // const [isSuccess, setIsSuccess] = useState(false);

  const { values, handleChange } = useFormik({
    initialValues: initialValues,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(otp);
    console.log(values.otp_value);

    try {
      const response = await fetch("http://localhost:5000/otp_verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          verification: otp,
        },
        body: JSON.stringify({
          otp: values.otp_value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("OTP is valid");
        toast.success(data.successful);
        setError("");
        // setIsSuccess(true);
      } else {
        toast.error(data.error);
        setError("Invalid OTP");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error verifying OTP");
      setError("Error verifying OTP");
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-transparent h-fit w-full flex justify-center py-10 px-6">
        <div className="w-full sm:w-2/3 md:w-1/2 rounded-lg bg-sky-500/10 p-6 backdrop-blur-sm relative">
          <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-neutral-200 font-custom-sans uppercase mb-5">
            Enter OTP
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center h-fit gap-3"
          >
            <div className="input-block text-left p-3 font-semibold font-custom-sans flex flex-col justify-center w-full">
              <input
                type="text"
                name="otp_value"
                id="otp_value"
                value={values.otp_value}
                placeholder="Enter OTP"
                onChange={handleChange}
                className="p-2 rounded-md bg-black/50 text-white focus:outline-none tracking-widest w-fulle"
              />
            </div>
            <button type="submit" className="button-green uppercase mt-5">
              Submit
            </button>
          </form>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="flex justify-between items-center flex-col gap-6 pt-10">
            <button className="button uppercase tracking-widest">
              RESEND OTP
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Particle />
    </div>
  );
};

export default OTPPage;
