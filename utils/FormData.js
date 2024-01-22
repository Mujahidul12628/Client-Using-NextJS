import React, { useState } from 'react';
import axios from 'axios';

const FormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    dob: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); 
  
    try {
      const response = await axios.post('http://localhost:3200/api/v1/students/', formData);
      console.log('Server Response Status:', response.status);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('work this handle submit')

//     try {
  
//       const response = await axios.post('http://localhost:3200/api/v1/students/', formData);

//       console.log('Server Response Status:', response.status);

//       setFormSubmitted(true);
//     } 
//     catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 border rounded-md shadow-md bg-slate-100">
      <h1 className="mb-4 text-2xl font-bold">My Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-semibold text-gray-600">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-semibold text-gray-600">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {formSubmitted && (
          <p className="text-green-600">Form submitted successfully!</p>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormData;









