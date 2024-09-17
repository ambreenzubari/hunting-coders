import * as fs from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    // Parse the incoming JSON request body
    const data = await req.json();
    let files = await fs.readdir("app/contactdata");
    // Write the parsed data to a file, converting it to a string
    await fs.writeFile(
      `app/contactdata/${files.length + 1}.json`,
      JSON.stringify(data, null, 2)
    ); // null, 2 is for pretty printing

    console.log("Data saved to file:", data);

    // Return the data back in the response
    return NextResponse.json({
      message: "Data saved successfully",
      data,
      status: 201,
      success: true,
    });
  } catch (err) {
    console.error("Error saving data:", err);

    // Handle errors and return error response
    return NextResponse.json({
      error: "Failed to save data",
      details: err,
      status: 404,
      success: true,
    });
  }
}
