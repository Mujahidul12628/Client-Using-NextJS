// pages/index.js
'use client'
import { useEffect, useState } from 'react';

function ItemsList() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [newItemName, setNewItemName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3200/api/v1/students');

        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
        setError('Error loading items');
      }
    };

    fetchItems();
  }, []);

  const handleAddItem = async () => {
    try {
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newItemName }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      // Fetch updated items after adding a new item
      const updatedItemsResponse = await fetch('http://localhost:3000/items');
      const updatedItems = await updatedItemsResponse.json();
      setItems(updatedItems);

      setNewItemName('');
      setIsAdding(false);
    } catch (error) {
      console.error(error);
      setError('Error adding item');
    }
  };

  const handleUpdateItem = async (itemId, newName) => {
    try {
      const response = await fetch(`http://localhost:3000/items/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      // Fetch updated items after updating an item
      const updatedItemsResponse = await fetch('http://localhost:3000/items');
      const updatedItems = await updatedItemsResponse.json();
      setItems(updatedItems);
    } catch (error) {
      console.error(error);
      setError('Error updating item');
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:3000/items/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Fetch updated items after deleting an item
      const updatedItemsResponse = await fetch('http://localhost:3000/items');
      const updatedItems = await updatedItemsResponse.json();
      setItems(updatedItems);
    } catch (error) {
      console.error(error);
      setError('Error deleting item');
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Items</h1>

      <button onClick={() => setIsAdding(true)}>Add Item</button>
      {isAdding && (
        <div>
          <input
            type="text"
            placeholder="New Item Name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <button onClick={handleAddItem}>Save</button>
        </div>
      )}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdateItem(item.id, prompt('Enter new name:'))}>
              Update
            </button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* styled-jsx for component-specific styling */}
      <style jsx>{`
        /* Add your component-specific styles here */
        h1 {
          color: #333;
        }

        button {
          margin: 5px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default ItemsList;
