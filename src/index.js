import "./global.css";
import { createFetchButton } from "./components/fetchButton";

const getRecipeButton = createFetchButton();

document.body.append(getRecipeButton);
