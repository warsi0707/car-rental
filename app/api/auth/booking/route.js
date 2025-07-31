import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export  async function GET(req) {
    try{
        const bookings =await DB.booking.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                car: true
            }
        })
        if(bookings.length == 0){
            return NextResponse.json({
                bookings: []
            })
        }
        return NextResponse.json({
            bookings: bookings
        })
    }catch(error){
        return NextResponse.json({
            error:error
        }, {
            status: 400
        })
    }
}