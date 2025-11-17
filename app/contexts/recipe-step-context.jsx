"use client";

import { createContext, useEffect, useState } from "react";
import useSWR from "swr";
import { GET_STEPS } from "./constants";

export const RecipeStepContext = createContext();

const fetcher = async (body) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());

// export const getRecipeSteps = async () =>
//   fetch("/api/recipe-steps").then((res) => res.json());
// .then((res) => setRecipeSteps(res));

export const addRecipeSteps = async (value, isCompleted) =>
  fetch("/api/recipe-steps", {
    method: "POST",
    body: JSON.stringify({
      value,
      isCompleted,
    }),
  }).then((res) => res.json());

export function RecipeStepContextProvider({ children }) {
  const [recipeSteps, setRecipeSteps] = useState({});
  const { data, error, isLoading } = useSWR("GetRecipeSteps", () =>
    fetcher(GET_STEPS)
  );
  // const { data, error, isLoading } = useSWR(
  //   "/api/recipe-steps",
  //   getRecipeSteps
  // );

  useEffect(() => {
    // getRecipeSteps();
    if (!isLoading) {
      console.log(data.data.recipeSteps);
      const recipeStepsObj = {};
      data.data.recipeSteps.forEach(
        ({ id, value, isCompleted }) =>
          (recipeStepsObj[id] = { value, isCompleted })
      );
      setRecipeSteps(recipeStepsObj);
    }
  }, [data]);

  return (
    <RecipeStepContext value={{ recipeSteps, setRecipeSteps }}>
      {children}
    </RecipeStepContext>
  );
}
