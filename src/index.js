import "./global.css";
import { createFetchButton } from "./components/fetchButton";
import { getRecipe } from "./api/mealDB";
import { createCard } from "./components/card";
import { createElement } from "./utils/elements";

const getRecipeButton = createFetchButton();
const cardContainer = createElement("div", { className: "cardContainer" });

getRecipeButton.addEventListener("click", async () => {
  const meal = await getRecipe();
  console.log(meal);

  const card = createCard({
    mealName: meal.strMeal,
    mealImageSrc: meal.strMealThumb,
  });
  cardContainer.append(card);
});

document.body.append(getRecipeButton);
document.body.append(cardContainer);
