import prisma from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
    const {id} = await params;
    try{
        const car = await prisma.car.findFirst({
            where: {
                id: parseInt(id)
            }
        })
        if(!car){
            return NextResponse.json({
                error: "Car not found"
            },{status: 404})
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



