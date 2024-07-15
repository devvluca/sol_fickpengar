import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/items', {
        headers: {
          'Authorization': token
        }
      });
      const data = await response.json();
      setItems(data.items);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
