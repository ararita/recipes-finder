import React from "react";
import style from "./recipe.module.css";

const Recipe = props => {
  return (
    <div className={style.recipe}>
      <a href={props.link}>
        <h2 className={style.title}>{props.title}</h2>
        <img className={style.image} src={props.image} alt="" />

        <ul style={{ color: "#424d5d" }}>
          <p className={style.ingredients}>Ingredients</p>
          {props.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </a>

      {/* <p>Calories: {props.calories}</p> */}
    </div>
  );
};
export default Recipe;
