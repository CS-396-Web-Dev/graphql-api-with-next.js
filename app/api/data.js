export const recipeSteps = {
  1: {
    value: "In a small pot boil some water",
    isCompleted: false,
  },
  2: {
    value: "Add dried ramen and simmer for 4 minutes",
    isCompleted: false,
  },
  3: {
    value: "Add seasoning packets",
    isCompleted: false,
  },
};

export function getSteps() {
  return Object.entries(recipeSteps).map(([id, data]) => ({ id, ...data }));
  // return recipeSteps;
}

export function getStepById(id) {
  return { id, ...recipeSteps[id] };
}

// todo: implement addStep
export function addStep(value, isCompleted) {
  const nextId = Object.values(recipeSteps).length + 1;

  recipeSteps[nextId] = { value, isCompleted };

  return { id: nextId, ...recipeSteps[nextId] };
}

export function modifyStep(id, value, isCompleted) {
  recipeSteps[id] = { value, isCompleted };
  return { id, ...recipeSteps[id] };
}
