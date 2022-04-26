// PostList.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import Destination from "./Destination";

export default function WanderlustList() {
  const [destinations, setDestination] = useState([]);
  useEffect(() => {
    const getData = async () => {
      // Get all of our posts and update state with them
      const destinationData = await DataStore.query(Destination);
      setDestination(destinationData);
    };
    getData();
  }, []);

  // Loop through
  return (
    <div>
      {destinations.map((destination) => (
        <div key={destination.id}>
          <h2>{destination.title}</h2>
          <p>{destination.content.substring(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
}
