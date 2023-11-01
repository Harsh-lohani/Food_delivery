import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Aromatic rice dish with meat or vegetables",
    price: 250,
  },
  {
    id: "m2",
    name: "Butter Chicken",
    description: "Creamy chicken curry",
    price: 350,
  },
  {
    id: "m3",
    name: "Masala Dosa",
    description: "Thin rice pancake filled with spicy potato filling",
    price: 120,
  },
  {
    id: "m4",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes with spices",
    price: 180,
  },
  {
    id: "m5",
    name: "Chole Bhature",
    description: "Spiced chickpeas with fried bread",
    price: 150,
  },
  {
    id: "m6",
    name: "Tandoori Chicken",
    description: "Marinated grilled chicken",
    price: 300,
  },
  {
    id: "m7",
    name: "Palak Paneer",
    description: "Paneer cheese in a creamy spinach sauce",
    price: 200,
  },
  {
    id: "m8",
    name: "Rogan Josh",
    description: "Lamb curry with aromatic spices",
    price: 400,
  },
  {
    id: "m9",
    name: "Pani Puri",
    description: "Hollow crispy puris filled with tangy water",
    price: 80,
  },
  {
    id: "m10",
    name: "Gulab Jamun",
    description: "Deep-fried milk dumplings in sugar syrup",
    price: 100,
  },
];

const AvailablMeals = () => {
     const mealsList = DUMMY_MEALS.map(meals => 
     <MealItem 
     id={meals.id}
     key={meals.id}
     name={meals.name}
     description={meals.description}
     price={meals.price }
     />);

     return (
       <section className={classes.meals}>
         <Card>
           <ul>{mealsList}</ul>
         </Card>
       </section>
     );
};
export default AvailablMeals;
