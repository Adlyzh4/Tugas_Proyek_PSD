import Product from "@/src/libs/models/Product";
import { connectMongoDB } from "@/src/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams: any) {
    try {

        const body = await request.json()
        const id = URLParams.params.id
        const {name, price, category} = body


        await connectMongoDB()

        const data = await Product.findByIdAndUpdate(id, {name, price, category})

        return NextResponse.json({msg: "Product updated successfully", data})
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "something went wrong",
        }, {status: 400 }
    );
 }
}