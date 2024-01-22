
'use client'
import React from 'react'
import { useEffect, useState } from "react"

const HomePage = () => {
  const [studentData, setStudentData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3200/api/v1/students')
      .then(response => response.json())
      .then(data => {
        setStudentData(data);  // Corrected state setter
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 
  return (
    <main className="container p-4 mx-auto">
    <table className="w-full border border-collapse border-gray-300">
      <thead className="bg-gray-300">
        <tr>
          <th className="px-4 py-2 border border-slate-400"> Id</th>
          <th className="px-4 py-2 border border-slate-400">Name</th>
          <th className="px-4 py-2 border border-slate-400">Email</th>
          <th className="px-4 py-2 border border-slate-400">Age</th>
          <th className="px-4 py-2 border border-slate-400">DOB</th>
          <th className="px-4 py-2 border border-slate-400">Action</th>
          

        </tr>
      </thead>
      <tbody>
        {studentData.map(student => (
          <tr key={student.id}>
            <td className="px-4 py-2 text-center border border-gray-500">{student.id}</td>
            <td className="px-4 py-2 text-center border border-gray-500">{student.name}</td>
            <td className="px-4 py-2 text-center border border-gray-500">{student.email}</td>
            <td className="px-4 py-2 text-center border border-gray-500">{student.age}</td>
            <td className="px-4 py-2 text-center border border-gray-500">{student.dob}</td>
            <td className="px-2 py-2 text-center border border-gray-500">
            <button className="px-3 py-1 mr-3 text-white bg-green-500 rounded">Update</button>
                <button className="px-3 py-1 ml-3 text-white bg-red-500 rounded">Delete</button>
            </td>
           

          </tr>
        ))}
      </tbody>
    </table>
  </main>
  )
}

export default HomePage




