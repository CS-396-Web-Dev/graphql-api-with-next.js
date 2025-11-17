import { createSchema } from "graphql-yoga";
import { addStep, getStepById, getSteps, modifyStep } from "../data";

export const schema = createSchema({
  typeDefs: `
    type Query {
      recipeSteps: [RecipeStep]
      recipeStep(id: ID!): RecipeStep 
    }

    type Mutation {
      addRecipeStep(value: String, isCompleted: Boolean): RecipeStep!
      modifyRecipeStep(id: ID, value: String, isCompleted: Boolean): RecipeStep
    }

    type RecipeStep {
      id: ID
      value: String
      isCompleted: Boolean
    }
  `,
  resolvers: {
    Query: {
      recipeSteps: () => getSteps(),
      recipeStep: (_, { id }) => getStepById(id),
    },
    Mutation: {
      addRecipeStep: (_, { value, isCompleted }) => addStep(value, isCompleted),
      modifyRecipeStep: (_, { id, value, isCompleted }) =>
        modifyStep(id, value, isCompleted),
    },

    RecipeStep: {
      id: (parent) => parent.id,
      value: (parent) => parent.value,
      isCompleted: (parent) => parent.isCompleted,
    },
  },
});
