//Bookings

import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function POST(req, {params}) {
    const {id} = await params;
    const {startDate, endDate} = await req.json()
    try{
        if(!startDate || !endDate){
            return NextResponse.json({
                error: "Provide proper start and end date in YYYY-MM-DD formate"
            })
        }
        const start = new Date(startDate)
        const last = new Date(endDate)
        const totalDay =  (last -start) / (1000*60*60*24)
        console.log(totalDay)
        const car = await DB.car.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        const totalPrice = car.pricePerDay * totalDay
        if(car){
            const booking = await DB.booking.create({
            data: {
                userId: parseInt(1),
                carId: parseInt(1),
                startDate:start,
                endDate:last,
                totalCost:totalPrice
            }
            
        })
        return NextResponse.json({
           message: "Your car is book, Enjoy"
        })
        }else{
            return NextResponse.json({
                error: "Booking failed"
            })
        }
        
        
        
    }catch(error){
        return NextResponse.json({
            error: error
        })
    }
}