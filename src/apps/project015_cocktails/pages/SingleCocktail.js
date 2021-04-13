import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const { id } = useParams();

  const fetchDrinkApi = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${id}`);
      const data = await res.json();
      const { drinks } = data;

      if (drinks) {
        const {
          strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions, strCategory,
          strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5
        } = drinks[0];

        const newDrinks = {
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
          category: strCategory,
          instructions: strInstructions,
          ingredients: [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
        }

        setCocktail(newDrinks);
      } else {
        setCocktail(null);
      }

      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }, [id])

  useEffect(() => {
    fetchDrinkApi();
  }, [fetchDrinkApi]);

  if (loading) {
    return <Loader />
  }

  if (!cocktail) {
    return <h2 className="section-title">no info to display <Link to="/" style={{ textDecoration: "underline" }}>Go back</Link></h2>
  }

  const { name, image, info, glass, instructions, ingredients, category } = cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">back home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p><span className="drink-data">name: </span> {name}</p>
          <p><span className="drink-data">category: </span> {category}</p>
          <p><span className="drink-data">info: </span> {info}</p>
          <p><span className="drink-data">glass: </span> {glass}</p>
          <p><span className="drink-data">instructions: </span> {instructions}</p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient}</span> : null;
            })}</p>
        </div>
      </div>

    </section>
  )
}

export default SingleCocktail;
