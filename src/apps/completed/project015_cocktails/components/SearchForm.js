import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../assets/context";

const SearchForm = () => {
  const { setSearchQuery } = useGlobalContext();

  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchQuery(searchValue.current.value);
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">
            search your favourite cocktail
          </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
