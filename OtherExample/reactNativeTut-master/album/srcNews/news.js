// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=df06323fa42045068f1b13c282f3e3bf";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
