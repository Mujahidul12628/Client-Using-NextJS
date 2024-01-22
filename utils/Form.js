import React, { useState } from 'react';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: 0,
    birthdate: '', // Corrected the name to match the state
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
    setIsFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className="flex items-center justify-center w-9/12">
      {!isFormVisible && (
        <button
          onClick={toggleFormVisibility}
          className="flex items-center justify-start px-6 py-2 text-white bg-blue-500 rounded-md mr-80 -ml-96 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add new Student
        </button>
      )}

      {isFormVisible && (
         <form className="p-8 rounded-lg shadow-md bg-slate-100" onSubmit={handleSubmit}>
         <label htmlFor="name" className="block mb-2">
           Name:
         </label>
         <input
           type="text"
           id="name"
           name="name"
           value={formData.name}
           onChange={handleInputChange}
           className="w-full px-4 py-2 mb-4 border rounded-md"
           required
         />
 
         <label htmlFor="email" className="block mb-2">
           Email:
         </label>
         <input
           type="email"
           id="email"
           name="email"
           value={formData.email}
           onChange={handleInputChange}
           className="w-full px-4 py-2 mb-4 border rounded-md"
           required
         />
 
         <label htmlFor="age" className="block mb-2">
           Age:
         </label>
         <input
           type="number"
           id="age"
           name="age"
           value={formData.age}
           onChange={handleInputChange}
           className="w-full px-4 py-2 mb-4 border rounded-md"
           required
         />
 
         <label htmlFor="birthdate" className="block mb-2">
           Birthdate:
         </label>
         <input
           type="date"
           id="birthdate"
           name="birthdate"
           value={formData.birthdate}
           onChange={handleInputChange}
           className="w-full px-4 py-2 mb-4 border rounded-md"
           required
         />
 
         <button
           type="submit"
           className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
         >
           Submit
         </button>
         </form>
      )}

      {isFormVisible && (
        <button
          onClick={toggleFormVisibility}
          className="px-2 py-2 mb-10 -m-10 text-white bg-red-500 rounded-md -mt-96 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
        >
         ╳
        </button>
      )}
    </div>
  );
};

export default Form;























// import React, { useState } from 'react';

// const Form = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
  
//     name: '',
//     email: '',
//     age: 0,
//     dob: '',
//   });

//   const [isFormVisible, setIsFormVisible] = useState(false);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic for form submission here
//     console.log('Form submitted:', formData);
//     setIsFormVisible(false);
//   };

//   const toggleFormVisibility = () => {
//     setIsFormVisible((prevIsVisible) => !prevIsVisible);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//         <button
//         onClick={toggleFormVisibility}
//         className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//       >
//         {isFormVisible ? 'Close Form' : 'Open Form'}
//       </button>

//       {isFormVisible && (
//       <form className="p-8 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
//         <label htmlFor="name" className="block mb-2">
//           Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//           className="w-full px-4 py-2 mb-4 border rounded-md"
//           required
//         />

//         <label htmlFor="email" className="block mb-2">
//           Email:
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           className="w-full px-4 py-2 mb-4 border rounded-md"
//           required
//         />

//         <label htmlFor="age" className="block mb-2">
//           Age:
//         </label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           value={formData.age}
//           onChange={handleInputChange}
//           className="w-full px-4 py-2 mb-4 border rounded-md"
//           required
//         />

//         <label htmlFor="birthdate" className="block mb-2">
//           Birthdate:
//         </label>
//         <input
//           type="date"
//           id="birthdate"
//           name="birthdate"
//           value={formData.birthdate}
//           onChange={handleInputChange}
//           className="w-full px-4 py-2 mb-4 border rounded-md"
//           required
//         />

//         <button
//           type="submit"
//           className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Submit
//         </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Form;






