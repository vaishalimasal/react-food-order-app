import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItem.module.css'

function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input label='Amout' 
      input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step: '1',
        defaultValue:'1'
      }} />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm