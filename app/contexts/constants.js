export const GET_STEPS = {
  query: `
    query GetSteps {
      recipeSteps {
        id
        value
        isCompleted
      }
    }
  `,
};
