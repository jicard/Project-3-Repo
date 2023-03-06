import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListComponent = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    axios.get('/api/items')
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleNewItem = (e) => {
    setNewItem(e.target.value);
  }

  const handleAddItem = () => {
    axios.post('/api/items', { item: newItem })
      .then(res => {
        setItems([...items, res.data]);
        setNewItem("");
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleDeleteItem = (id) => {
    axios.delete(`/api/items/${id}`)
      .then(res => {
        setItems(items.filter(item => item._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <h3>List Component</h3>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newItem} onChange={handleNewItem} />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default ListComponent;

// const deleteItem = (index) => {
//     const updatedItems = items.filter((elem) => {
//       if (index == elem.id) {
//         elem.strike = true;
//       }
//       return elem;
//     });

//     setItems(updatedItems);
//   };

// const [strike, setStrike] = useState(false);

//<h3
// style={{
//     textDecoration: elem.strike ? 'line-through' : 'none',
//   }}
// >