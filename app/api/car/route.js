import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";


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