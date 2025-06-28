import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async() => {
    try {
        const db = await connectDB()
        const food = await db.collection("foods").find().toArray()
        return NextResponse.json(food)
    } catch (error) {
      console.log(error);   
    }
}