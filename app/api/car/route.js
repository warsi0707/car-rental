import prisma from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";


export async function  GET(req) {
    try{
        const cars = await prisma.car.findMany({})
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
        },{status:404})
    }
}