import React from "react";
import { Fragment } from "react";
import classes from "./Header.module.scss";
import mealsImage from "../../../src/assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="This a table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
