import db from "@/lib/PrismaClientProvider";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export  async function GET(req) {
       const header = await headers()
       const userId = header.get('userId')
    try{
        const bookings =await db.booking.findMany({
            where: {
                userId: parseInt(userId)
            },
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