// http://localhost:3000/api/getblog?slug=how-to-learn-javascripthttp://localhost:3000/api/getblog?slug=how-to-learn-javascript

import * as fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const slug = req.nextUrl.searchParams.get("slug");
    if (!slug) {
      return NextResponse.json(
        { error: "Slug parameter is missing" },
        { status: 400 }
      );
    }
    const data = await fs.readFile(`blogdata/${slug}.json`, "utf-8");
    const jsonData = JSON.parse(data);
    return NextResponse.json(jsonData, { status: 200 });
  } catch (err) {
    if (err.code === 'ENOENT') {
      return NextResponse.json(
        { error: "File not found. The provided slug does not exist." },
        { status: 404 }
      );
    }
    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON format in the file." },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: "Server Error Occurred" },
      { status: 500 }
    );
  }
}
