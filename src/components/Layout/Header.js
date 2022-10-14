import {Fragment} from 'react';
import classes from './Header.module.css';
import mealImage  from '../../assets/meals.jpg';
import HearderCartButton from './HearderCartButton';

function Header(props) {
  return (
    // fragment used as wraper bcoz we must have one root element return in a function
   <Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
       <HearderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealImage} alt="A table full of food" />
    </div>
    </Fragment>
  )
}

export default Header