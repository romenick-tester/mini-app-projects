import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider, useGlobalContext } from "./assets/context";
import Home from "./components/Home";
import Movie from "./components/SingleMovie";

import "./assets/index.css";

function MovieDB() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  )
}

const Index = () => {
  const data = useGlobalContext();
  console.log(data);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </Router>
  )
}

export default MovieDB;
