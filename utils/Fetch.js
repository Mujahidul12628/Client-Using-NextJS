// pages/index.js
'use client'
import { useState, useEffect } from 'react';

const Fetch = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3200/api/v1/students')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>User Data from API:</h1>
      <ul>
        {userData.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Date of Birth:</strong> {user.dob}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
