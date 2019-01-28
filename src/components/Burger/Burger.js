import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
  // tranform the main state Object (in BuregerBuilder)
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // into an Array of properties and values
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // that are a new Array if multiple (ex. cheese, cheese)
        return (
          <BurgerIngredient
            key={igKey + i}
            type={igKey} />
          );
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
