import * as fs from "fs/promises";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Read the directory asynchronously
    const files = await fs.readdir("blogdata");
    // If no files are found, return an empty array with a message
    if (files.length === 0) {
      return NextResponse.json(
        { message: "No blog data available", files: [] },
        { status: 200 }
      );
    }

    let allBlogs = [];

    // Loop through files and try reading each one
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      try {
        // Read file data
        let fileData = await fs.readFile(`blogdata/${file}`, "utf-8");

        // Parse the file data into JSON and add objects to the `allBlogs` array
        const blog = JSON.parse(fileData);
        allBlogs = allBlogs.concat(blog); // Add individual blog objects to the main array

      } catch (fileError) {
        // Handle specific error related to file reading or JSON parsing
        if (fileError.code === "ENOENT") {
          return NextResponse.json(
            { error: `File not found: ${file}` },
            { status: 404 }
          );
        }

        if (fileError instanceof SyntaxError) {
          return NextResponse.json(
            { error: `Invalid JSON format in file: ${file}` },
            { status: 500 }
          );
        }

        // Catch any other file-specific errors
        return NextResponse.json(
          { error: `Error processing file: ${file}` },
          { status: 500 }
        );
      }
    }

    // Send the response with the list of blogs as a single flat array of objects
    return NextResponse.json(allBlogs, { status: 200 });
  } catch (err) {

    // Handle specific cases where the directory doesn't exist
    if (err.code === "ENOENT") {
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
