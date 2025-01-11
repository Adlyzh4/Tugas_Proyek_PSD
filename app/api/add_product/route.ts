import Product from "@/src/libs/models/Product";
import { connectMongoDB } from "@/src/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {

        const body = await request.json()
        const {name, price, category, imgSrc, fileKey} = body

        await connectMongoDB()

        const data = await Product.create({name, price, category, imgSrc, fileKey})

        return NextResponse.json({msg: "Product added successfully", data})
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "something went wrong diroute",
        }, {status: 400 }
    );
 }
}