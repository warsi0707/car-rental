import prisma from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";


//book a car
export async function POST(req, { params }) {
    const { id } = await params;
    const { startDate, endDate, userId } = await req.json()
    try {
        if(!userId){
            return NextResponse.json({
                error: "Login required"
            },{status:404})
        }
        if (!startDate || !endDate) {
            return NextResponse.json({
                error: "Provide proper start and end date in YYYY-MM-DD formate"
            },{status: 400})
        }
        const start = new Date(startDate)
        const last = new Date(endDate)
        if(start && last < new Date){
            return NextResponse.json({
                error: 'Previous date not allowed'
            },{status:404})
        }
        const totalDay = (last - start) / (1000 * 60 * 60 * 24)
        const car = await prisma.car.findUnique({
            where: {
                id: parseInt(id)
            }
        })
        const totalPrice = car.pricePerDay * totalDay
        if (car) {
            const booking = await prisma.booking.create({
                data: {
                    userId: parseInt(userId),
                    carId: parseInt(id),
                    startDate: start,
                    endDate: last,
                    totalCost: totalPrice
                }

            })
            return NextResponse.json({
                message: "Your car is book, Enjoy"
            })
        } else {
            return NextResponse.json({
                error: "Booking failed"
            },{status: 400})
        }
    } catch (error) {
        return NextResponse.json({
            error: error
        })
    }
}
//update your bookings
export async function PUT(req, { params }) {
    const { id } = await params;
    const { startDate, endDate, userId } = await req.json();
    try{
    if (!startDate || !endDate) {
        return NextResponse.json({
            error: "Change date formate to YYYY-MM-DD"
        },{status: 400})
    }
    if(!userId){
        return NextResponse.json({
            error: "You are not authorised"
        }, {
            status: 404
        })
    }
    const start = new Date(startDate)
    const end = new Date(endDate)
    const totalDay = (end - start) / (1000 * 60 * 60 * 24)
    const car = await prisma.car.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!car) {
        return NextResponse.json({
            error: "Booking of this car not found"
        }, { status: 404 })

    }
    const totalPrice = car.pricePerDay * totalDay

    const update = prisma.booking.update({
        where: {
            id: parseInt( id),
            userId: parseInt( userId)
        }, data: {
            startDate:start,
            endDate:end,
            totalCost:totalPrice
        }
    })
    return NextResponse.json({
        message: "Booking update"
    })
    }catch(error){
        return NextResponse.json({
            error: error
        },{
            status: 400
        })
    }
}
//remove your bookings
export async function DELETE(req, {params}) {
    const {id} = await params;
    const {userId} = await req.json()
    try{
        const RemoveBooking = await prisma.booking.delete({
            where: {
                id: parseInt(id),
                userId: parseInt(userId)
            }
        })
        if(RemoveBooking){
            return NextResponse.json({
                message: "Booking removed"
            })
        }else{
            return NextResponse.json({
                error: "Booking removing failed"
            }, {status: 404})
        }

    }catch(error){
        return NextResponse.json({
            error: error
        },{status:404})
    }
}