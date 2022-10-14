import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HearderCartButton.module.css'

function HearderCartButton(props) {
  return (
    <div>
       <button className={classes.button}>
        <span className={classes.icon}>
        <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
       </button>
    </div>
  )
}

export default HearderCartButton