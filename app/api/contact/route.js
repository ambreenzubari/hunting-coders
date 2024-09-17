// http://localhost:3000/api/getblog?slug=how-to-learn-javascripthttp://localhost:3000/api/getblog?slug=how-to-learn-javascript

import * as fs from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const data = await req.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json("ERROR", err);
  }
}
