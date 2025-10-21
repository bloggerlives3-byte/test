import { fetchSignatureRecipes } from "@/lib/data-service";
import RecipesExplorer from "./recipesExplorer";

export default async function RecipesPage() {
  const recipes = await fetchSignatureRecipes();

  return <RecipesExplorer recipes={recipes} />;
}
