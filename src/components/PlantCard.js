import React, {useState} from "react";

function PlantCard({name, image, price, onDelete, id}) {
  const[inStock, setInStock] = useState(true);

  function handleToggle() {
    setInStock(prev => !prev);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      onDelete(id)
    }
    )
  }


  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggle}>In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
