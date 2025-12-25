import "./App.css";
import React from "react";
import Home from "./Home.js";
import Rooms from "./Rooms.js";
import SingleRoom from "./SingleRoom.js";
import Error from "./Error.js";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
