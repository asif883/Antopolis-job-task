import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async(req)=> {

    const foodInfo = await req.json()

    try {
        const db = await connectDB()
        const foodCollection = db.collection("foods")
        const food = await foodCollection.insertOne(foodInfo)
        return NextResponse.json(food)
        
    } catch (error) {
        console.log(error);
    }
}