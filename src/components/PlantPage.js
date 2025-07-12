import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then((data) => {
      setPlants(data);
    })
  }, []);

  const[search, setSearch] = useState('');

  const plantsToDisplay = plants.filter((plant) => {
    const plantSearched = plant.name.toLowerCase().includes(search.toLowerCase());
    return plantSearched;
  })

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleNewPlantAdd(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then((savedPlant) => {
      setPlants([...plants, savedPlant])
    })
  }

  return (
    <main>
      <NewPlantForm onAdd={handleNewPlantAdd}/>
      <Search onSearch={handleSearch} search={search}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
