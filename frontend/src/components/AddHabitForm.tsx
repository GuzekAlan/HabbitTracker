import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddHabitForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
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
        navigate('/');
      };
    

    return (
            <div className="p-4 w-full max-w-max">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2 w-full max-w-max">
                  <label className="block text-gray-700">Name:</label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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