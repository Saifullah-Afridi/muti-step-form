import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const { getValues } = useFormContext();
  const formData = getValues();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle the final form submission
    // Here you can implement the submission logic (e.g., API call)
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Final Submission</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(formData, null, 2)}
      </pre>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => navigate("/step2")} // Go back to Step 2
          className="bg-gray-500 text-white p-2"
        >
          Back to Step 2
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 mt-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
