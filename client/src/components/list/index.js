import React, { useState, useEffect } from "react";
import axios from "axios";

const ListComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>List Component</h3>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;