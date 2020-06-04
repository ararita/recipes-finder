import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./styles.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(process.env);

    const API_ID = `${process.env.REACT_APP_API_ID}`;
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const data = await response.json();

      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          // placeholder="ingredient"
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>{" "}
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.url}
            link={recipe.recipe.url}
            title={recipe.recipe.label}
            // calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}
