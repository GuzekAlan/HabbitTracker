import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_HABIT } from "../graphql/queries";


const AddHabitForm = () => {
    const navigate = useNavigate();

    const [addHabit, {loading, error}] = useMutation(ADD_HABIT);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    const [formData, setFormData] = useState({
        name: '',
        difficulty: 1,
        color: '#FFFFFF'
      });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();  
        addHabit({variables: formData});
        // Mocked
        navigate("/")
      };
    

    return (
            <div className="p-4 w-full max-w-max">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2 w-full max-w-max">
                  <label className="block text-gray-700">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex gap-2 w-full max-w-max">
                  <label className="block text-gray-700">Difficulty:</label>
                  <input
                    type="number"
                    step="1"
                    min="1"
                    max="10"
                    name="difficulty"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex gap-2 w-full items-center">
                  <label className="block text-gray-700">Color:</label>
                  <input
                    name="color"
                    type="color"
                    className="p-1 h-10 w-10 block bg-white"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-[rem] py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Add Habit
                </button>
              </form>
            </div>
    )
}

export default  AddHabitForm;