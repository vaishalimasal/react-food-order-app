import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

function Cart(props) {
    const cartItems = 
    <ul className={classes['cart-items']}>
         { [{
        id: '1',
        name:'Sushi',
        amount:2 ,
        price:125
    }].map((item) => (<li>{item.name} </li>))}
    </ul>

  return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span> Total Amout</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>order</button>
        </div>
    </Modal>
  )
}

export default Cart