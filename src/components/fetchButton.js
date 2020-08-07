import { createElement } from "../utils/elements.js";

export function createFetchButton() {
  const fetchButton = createElement("button", {
    className: "btnFetch",
    innerText: "get recipe",
  });
  return fetchButton;
}
