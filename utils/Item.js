'use client'
// pages/item.js
import React, { useEffect, useState } from 'react';

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3200/api/v1/students')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {items.map(userData => (
            <tr key={userData.id}>
              <td>{userData.name}</td>
              <td>{userData.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Item;
