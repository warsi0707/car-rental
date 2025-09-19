import  { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    const {id} = await params;
    try{
        const car = await DB.car.findFirst({
            where: {
                id: parseInt(id)
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
    const {name, brand, modelYear, price, image,content} = await req.json() 
    const {id} = await params;
    try{
        const car = await DB.car.update({
            where: {
                id: parseInt(id)
            }, data :{
                name,
                brand,
                modelYear,
                pricePerDay: price,
                image,
                content
            }
        })
        if(!car){
            return NextResponse.json({
                error: "Updation failed"
            },{status:400})
        }
        return NextResponse.json({
            message: "Car data updated"
        })
    }catch(error){
        return NextResponse.json({
            error: error
        },{status: 404})
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
        },{status:404})
    }
}