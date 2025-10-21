import { Suspense } from "react";
import { fetchSignatureRecipes } from "@/lib/data-service";
import RecipesExplorer from "./recipesExplorer";

export default async function RecipesPage() {
  const recipes = await fetchSignatureRecipes();

  return (
    <Suspense fallback={<div className="px-4 py-16 text-sm text-[color:var(--color-foreground)]/60">Loading recipes...</div>}>
      <RecipesExplorer recipes={recipes} />
    </Suspense>
  );
}
