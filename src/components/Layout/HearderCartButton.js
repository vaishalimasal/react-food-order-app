import React from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HearderCartButton.module.css";
import CartContext from "../../store/cart-context";

function HearderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </div>
  );
}

export default HearderCartButton;
