// MultiStepForm.js
import { useForm, FormProvider } from "react-hook-form";
import { Outlet, useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ProgressBar from "./ProgressBar";

// Define validation schemas for each step
const validationSchemaStep1 = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dob: Yup.date()
    .required("Date of Birth is required")
    .typeError("Invalid date format"),
  country: Yup.string().required("Country is required"),
});

const MultiStepForm = () => {
  const location = useLocation();
  const currentStep =
    location.pathname === "/step1" ? 1 : location.pathname === "/step2" ? 2 : 3;

  const methods = useForm({
    resolver: yupResolver(validationSchemaStep1), // Apply Yup schema resolver here
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      country: "",
      familyMembers: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <ProgressBar currentStep={currentStep} />
      <form className="space-y-4">
        <Outlet />
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
