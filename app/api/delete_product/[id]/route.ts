import Product from "@/src/libs/models/Product";
import { connectMongoDB } from "@/src/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
    try {

        const id = URLParams.params.id
       
        await connectMongoDB()

        await Product.findByIdAndDelete(id)

        return NextResponse.json({msg: "Product delete successfully"})
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "something went wrong",
        }, {status: 400 }
    );
 }
}