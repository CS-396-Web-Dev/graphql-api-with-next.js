import { RecipeStepForm, RecipeStepList } from "./components";
import { RecipeStepContextProvider } from "./contexts/recipe-step-context";
export default function Home() {
  return (
    <main>
      <RecipeStepContextProvider>
        <RecipeStepForm />
        <section>
          <RecipeStepList />
        </section>
      </RecipeStepContextProvider>
    </main>
  );
}
