import Product from "@/src/libs/models/Product";
import { connectMongoDB } from "@/src/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB()

        const data = await Product.find()

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "something went wrong",
        }, {status: 400 }
    );
 }
}