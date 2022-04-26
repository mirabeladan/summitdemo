// CreatePost.js
import { useState } from "react";

// Import data store and the Post model
import { DataStore } from "@aws-amplify/datastore";
import { Destination } from "./models";

export default function CreateDestination() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save our Post using the title and content the user inputted.
    await DataStore.save(
      new Destination({
        destination,
        date,
      })
    );
    setDestination("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Destination</label>
        {/* Update the title in state every time the title field is changed */}
        <input
          type="text"
          name="destination"
          id="title"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">When I want to visit</label>
        {/* Update the content in state every time the content field is changed */}
        <textarea
          id="content"
          name="date"
          type="AWSdate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <input type="submit" value="create" />
    </form>
  );
}
