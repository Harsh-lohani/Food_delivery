import classes from './MealsSummay.module.css'
import bgImage from '../../assets/bg2.jpg'
const MealsSummary = () => {
  return (
    <div>
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
        <div className={classes.background}></div>
      </section>
    </div>
  );
};

export default MealsSummary;
