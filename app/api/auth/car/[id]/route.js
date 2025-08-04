import db from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    const {id} = await params;
    try{
        const car = await db.car.findFirst({
            where: {
                id: id
            }
        })
        return NextResponse.json({
            car: car
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}
export async function PUT(req, {params}) {
    const {name, brand, modelYear, price, image, available} = await req.json() 
    const {id} = await params;
    try{
        const car = await DB.car.update({
            where: {
                id: id
            }, data :{
                name,
                brand,
                modelYear,
                pricePerDay: price,
                image,
                available
            }
        })
        if(!car){
            return NextResponse.json({
                error: "Updation failed"
            })
        }
        return NextResponse.json({
            message: "Car data updated"
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}
export async function DELETE(req, {params}) {
    const {id} = await params;
    try{
        const car = await DB.car.delete({
            where: {
                id: parseInt(id)
            }
        })
        return NextResponse.json({
            message: "Deleted success"
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}