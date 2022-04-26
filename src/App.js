import "./App.css";
import Destination from "./Destination";
import WanderlustList from "./WanderlustList";
import { MapView } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";

function App() {
  return (
    <div>
      <div className="container">
        <Destination />
        <WanderlustList />
      </div>
      <div className="container">
        <MapView
          initialViewState={{
            latitude: 39.113014,
            longitude: -105.358887,
            zoom: 1,
          }}
        ></MapView>
      </div>
    </div>
  );
}

export default App;
