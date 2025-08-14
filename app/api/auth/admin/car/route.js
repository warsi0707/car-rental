import prisma from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, brand, modelYear, pricePerDay, image, content } = await req.json()
    try {
        if( !name || !brand ||  !modelYear || !pricePerDay  || !image || !content ){
            return NextResponse.json({
                error: "All input required"
            },{status:404})
        }
        const car = await prisma.car.create({
            data: 
                {
                    name:name,
                    brand:brand,
                    modelYear:parseInt(modelYear),
                    pricePerDay: parseFloat(pricePerDay),
                    image:image,
                    content:content
                }
            
        })
        if (car) {
            return NextResponse.json({
                message: "Car added"
            }, {
                status: 200
            })
        } else {
            return NextResponse.json({
                error: "Car additioin failed"
            }, {
                status: 400
            })
        }
    } catch (error) {
        return NextResponse.json({
            error: error
        },{status:404})
    }

}
export async function GET(req) {
    try {
        const cars = await prisma.car.findMany({})
        if (cars.length == 0) {
            return NextResponse.json({
                cars: []
            })
        }
        return NextResponse.json({
            cars: cars
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        },{status:404})
    }
}