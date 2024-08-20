
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/actors"><Actors /></Route>
        <Route path="/directors"><Directors /></Route>
        <Route path="/movies"><Movies /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;