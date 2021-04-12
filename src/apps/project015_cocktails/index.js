import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import "./assets/index.css";
import { AppProvider, useGlobalContext } from "./assets/context";

function Cockails() {
  return (
    <AppProvider>
      <Index />
    </AppProvider>
  )
}

function Index() {
  const data = useGlobalContext();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cocktail/:id" component={SingleCocktail} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  )
}

export default Cockails;
