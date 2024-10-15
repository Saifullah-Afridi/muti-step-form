import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Step2 = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  const onSubmit = (data) => {
    if (data.name && data.relation) {
      const familyMembers = getValues("familyMembers") || [];
      const updatedMembers = [
        ...familyMembers,
        { name: data.name, relation: data.relation },
      ];
      setMembers(updatedMembers);
      setValue("familyMembers", updatedMembers); // Update the family members in the form state
      setValue("name", ""); // Reset name input
      setValue("relation", ""); // Reset relation input
    }
  };

  const handleNext = () => {
    navigate("/step3"); // Navigate to the final step
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Step 2: Family Members</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Family Member Name</label>
          <input {...register("name")} className="border p-2 w-full" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label>Relation</label>
          <select {...register("relation")} className="border p-2 w-full">
            <option value="">Select Relation</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
          </select>
          {errors.relation && (
            <p className="text-red-500">{errors.relation.message}</p>
          )}
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
          Add Member
        </button>
      </form>

      <h3 className="mt-4">Family Members:</h3>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member.name} - {member.relation}
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={() => navigate("/step1")} // Go back to Step 1
          className="bg-gray-500 text-white p-2"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 text-white p-2"
        >
          Next to Final Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
