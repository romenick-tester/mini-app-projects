import React from "react";
import { useGlobalContext } from "../assets/context";

const SearchForm = () => {
  const { setSearchQuery } = useGlobalContext();

  return (
    <div>
      <h2>search form component</h2>
    </div>
  )
}

export default SearchForm;
