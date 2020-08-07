/* import "./global.css"; */
import { createFetchButton } from "./components/fetchButton";
import { getRecipe } from "./api/mealDB";
import { createCard } from "./components/card";

const getRecipeButton = createFetchButton();

getRecipeButton.addEventListener("click", async () => {
  const meal = await getRecipe();
  console.log(meal);

  const card = createCard({
    mealName: meal.strMeal,
    mealImageSrc: meal.strMealThumb,
  });
  document.body.append(card);
});

document.body.append(getRecipeButton);
