import React from "react";
import { AppProvider, useGlobalContext } from "./assets/context";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import "./assets/index.css";

function CartApp() {

  return (
    <AppProvider>
      <Index />
    </AppProvider>
  )
}

function Index() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default CartApp;
