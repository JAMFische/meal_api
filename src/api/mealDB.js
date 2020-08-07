export async function getRecipe() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = response.json;
  return data;
}
