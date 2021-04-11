import React from "react";
import { useGlobalContext } from "./assets/context";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";


function CartApp() {

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default CartApp;
