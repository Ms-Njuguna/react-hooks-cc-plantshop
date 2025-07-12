import React, {useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const[deleted, setDeleted] = useState('');

  function handleDelete() {
    setDeleted(plants.splice(deleted,1));
  }

  return (
    <ul className="cards">
      {plants.map((plant) => {
        return(
          <PlantCard 
            key={plant.id}
            id={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            onDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;
