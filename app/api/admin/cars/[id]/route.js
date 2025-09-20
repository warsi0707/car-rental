import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function  GET(req, {params}) {
    const {id} = await params;
    try{
        const car = await DB.car.findFirst({
            where: {
                id: id
            }
        })
        if(!car){
            return NextResponse.json({
                message: "NO car available",
                car: []
            })
        }
        return NextResponse.json({
        car: car
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
    
}
export async function  PUT(req, {params}) {
    const {id} = await params;
     const {name, brand, modelYear, pricePerDay, images, content, properties, ownerId} = await req.json()

    try{
        const updateCar =await DB.car.update({
            where: {
                id: id
            },
            data: {
                name,
                brand,
                modelYear,
                pricePerDay,
                images,
                properties,
                available: true,
                ownerId
            }
        })
        if(!updateCar){
            return NextResponse.json({
                error: "Car update failed"
            },{status: 401})
        }
        return NextResponse.json({
            message: "Updated",
            update: updateCar
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}

export async function  DELETE(req, {params}) {
    const {id} = await params;

    try{
        const deleteCar =await DB.car.delete({
            where: {
                id: id
            }
        })
        if(!deleteCar){
            return NextResponse.json({
                error: "Deletion failed"
            },{status: 401})
        }
        return NextResponse.json({
            message: "Deleted successfully",
            deleteCar: deleteCar
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}