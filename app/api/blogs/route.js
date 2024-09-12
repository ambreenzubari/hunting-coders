// http://localhost:3000/api/blogs
import * as fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Read the directory asynchronously
    const files = await fs.readdir("blogdata");
    console.log("Files in blogdata:", files);

    // If no files are found, return an empty array with a message
    if (files.length === 0) {
      return NextResponse.json(
        { message: "No blog data available", files: [] },
        { status: 200 }
      );
    }

    // Send the response with the list of files
    return NextResponse.json( files , { status: 200 });

  } catch (err) {
    console.error("ERROR reading directory:", err);

    // Handle specific cases where the directory doesn't exist
    if (err.code === 'ENOENT') {
      return NextResponse.json(
        { error: "Directory not found: 'blogdata'" },
        { status: 404 }
      );
    }

    // Handle general errors like permission issues or others
    return NextResponse.json(
      { error: "Server error occurred while reading directory" },
      { status: 500 }
    );
  }
}



