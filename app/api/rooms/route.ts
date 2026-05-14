import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

// CREATE ROOM
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await connectDB();

    const db = client.db("honnavarpg");

    const result = await db.collection("rooms").insertOne({
      title: body.title,
      rent: body.rent,
      location: body.location,
      phone: body.phone,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      result,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error,
    });
  }
}

// FETCH ROOMS
export async function GET() {
  try {
    const client = await connectDB();

    const db = client.db("honnavarpg");

    const rooms = await db
      .collection("rooms")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      rooms,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      error,
    });
  }
}