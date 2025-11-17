import { NextResponse } from "next/server";
import { addStep, getSteps } from "../data";

export async function GET(req) {
  try {
    return NextResponse.json(getSteps());
  } catch (err) {
    // log internally
    console.log(err);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { value, isCompleted } = body;

    const newRecipeStep = addStep(value, isCompleted);

    return NextResponse.json(newRecipeStep);
  } catch (err) {
    // log internally
    console.log(err);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
