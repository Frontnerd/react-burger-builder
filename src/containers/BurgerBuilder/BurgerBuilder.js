import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  // cunstructor( props ) {
  //   super(props)
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addIngredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  removeIngredienthandler = (type) => {
    const oldCount = this.state.ingredients[type];
    // nothing happen if we want to remove a non existing ingredient
    if (oldCount <= 0) {
      return;
    }
    const updatedCounted = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted;
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  render () {
    // disable button
    const disableInfo = {
      ...this.state.ingredients
    };

    for ( let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientRemoved={this.removeIngredienthandler}
          ingredientAdded={this.addIngredienthandler}
          disabled={disableInfo} />
      </Aux>
    );
  }
}


export default BurgerBuilder;
