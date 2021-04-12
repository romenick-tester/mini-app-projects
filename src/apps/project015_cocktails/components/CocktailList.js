import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../assets/context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">no cocktails matched</h2>
  }

  console.log(cocktails);
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList;
