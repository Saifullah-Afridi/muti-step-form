import React from "react";

const ProgressBar = ({ currentStep }) => {
  const totalSteps = 3; // Total number of steps
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="flex items-center mb-4">
      {steps.map((step) => (
        <div key={step} className="flex items-center">
          {/* Circle for each step */}
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out ${
              step < currentStep
                ? "bg-green-500 border-green-500 text-white" // Completed steps are green
                : step === currentStep
                ? "bg-blue-500 border-blue-500 text-white scale-110 shadow-lg" // Current active step is blue
                : "border-gray-300 text-gray-500" // Future steps are grey
            }`}
            aria-label={`Step ${step} ${
              step < currentStep
                ? "completed"
                : step === currentStep
                ? "active"
                : "incomplete"
            }`}
          >
            {step}
          </div>
          {/* Render line if it's not the last step */}
          {step < totalSteps && (
            <div
              className={`transition-all duration-300 ease-in-out ${
                step < currentStep ? "bg-green-500" : "bg-gray-300"
              }`}
              style={{ width: "4rem", height: "2px" }} // Adjust line width and height
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
