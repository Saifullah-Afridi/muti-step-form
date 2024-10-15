import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    dob: Yup.date()
      .required("Date of Birth is required")
      .typeError("Invalid date format"),
    country: Yup.string().required("Country is required"),
  });

  const onSubmit = (data) => {
    const isValid = validationSchema.isValidSync(data);
    if (isValid) {
      navigate("/step2"); // Navigate to Step 2
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Step 1: Personal Information</h2>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} className="border p-2 w-full" />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("lastName")} className="border p-2 w-full" />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label>Date of Birth</label>
        <input type="date" {...register("dob")} className="border p-2 w-full" />
        {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
      </div>

      <div>
        <label>Country</label>
        <select {...register("country")} className="border p-2 w-full">
          <option value="">Select Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && (
          <p className="text-red-500">{errors.country.message}</p>
        )}
      </div>

      <button
        type="button"
        onClick={handleSubmit(onSubmit)}
        className="bg-blue-500 text-white p-2 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
