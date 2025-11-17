"use client";
import { useState } from "react";

export default function RecipeStep({ step }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <li>
      <label
        style={{
          textDecoration: isDone ? "line-through" : "none",
        }}
      >
        {step}
      </label>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => {
          setIsDone(!isDone);
        }}
      ></input>
    </li>
  );
}
