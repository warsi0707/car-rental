import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function POST(req) { 
    const {name, brand, modelYear, price, image,content} = await req.json()
    // try{
        const car = await DB.car.create({
            data: {
                name,
                brand,
                modelYear,
                pricePerDay:price,
                image,
                content
            }
        })
        if(car){
            return NextResponse.json({
                message: "Car added"
            }, {
                status: 200
            })
        }else{
            return NextResponse.json({
                error: "Car additioin failed"
            },{
                status: 400
            })
        }
    // }catch(error){
    //     return NextResponse.json({
    //         error: error
    //     })
    // }
    
}
export async function  GET(req) {
    try{
        const cars = await DB.car.findMany({})
        if(cars.length == 0){
            return NextResponse.json({
                cars: "No data"
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