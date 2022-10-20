import React, { useState, useContext, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HearderCartButton.module.css";
import CartContext from "../../store/cart-context";

function HearderCartButton(props) {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  
  const btnclasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`
  
  useEffect(() =>{
    if(items.lenght === 0){
      return;
    }
    setBtnIsHighLighted(true)

    const timer = setTimeout(()=>{
      setBtnIsHighLighted(false);
    },300);

    return () =>{
      clearTimeout(timer);
    }
  },[items])

  return (
    <div>
      <button className={btnclasses} onClick={props.onClick}>
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
