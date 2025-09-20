import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server"

export async function POST(req) {
    const {name, brand, modelYear, pricePerDay, images, content, properties, ownerId} = await req.json()
   
    if(!name || !brand || !modelYear || !pricePerDay || !images || !content || !properties || !ownerId){
        return NextResponse.json({
            message: 'input required'
        })
    }
    try{
        const newCar = await DB.car.create({
        data: {
            name,
            brand,
            modelYear: parseInt(modelYear),
            pricePerDay: parseInt(pricePerDay),
            images,
            content,
            properties,
            ownerId
        }
    })
    return NextResponse.json({
        message: "Car uploaded successfully",
        car: newCar
    },{status: 201})
    }catch(error){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
export async function  GET(req) {
    try{
        const cars = await DB.car.findMany({})
        if(cars.length == 0){
            return NextResponse.json({
                cars: []
            })
        }
        return NextResponse.json({
            cars: cars
        })
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
    
}