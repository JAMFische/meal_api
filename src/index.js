import "./global.css";
import { createFetchButton } from "./components/fetchButton";
import { getRecipe } from "./api/mealDB";

const getRecipeButton = createFetchButton();

getRecipeButton.addEventListener("click", async () => {
  const meal = await getRecipe();
  console.log(meal);
});

document.body.append(getRecipeButton);
