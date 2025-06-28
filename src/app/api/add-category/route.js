import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async(req) => {
    const newCategory = await req.json()

    try {
        const db = await connectDB()
        const categoryCollection = db.collection('category')
        const category = await categoryCollection.insertOne(newCategory)
        return NextResponse.json(category)
    } catch (error) {
        console.log(error);
    }
}