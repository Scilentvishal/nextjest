import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json([
    { id: 1, username: "vishal" },
    { id: 2, username: "vishal2" },
    { id: 3, username: "vishal3" },
    { id: 4, username: "vishal4" },
  ]);
}

export async function POST() {}
