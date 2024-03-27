import { food_list } from "@/public/asstes";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(food_list);
}
