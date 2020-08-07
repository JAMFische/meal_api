import { createElement } from "../utils/elements";

export function createCard(apiData) {
  const title = createElement("h3", {
    className: "cardTitle",
    innerText: apiData.mealName,
  });
  const imgSrc = createElement("img", { src: apiData.mealImageSrc });
  const card = createElement("div", { className: "card" }, [title, imgSrc]);

  return card;
}
