import { DB } from "@/lib/PrismaClientProvider";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    const { bookingId } = await params;
    try {
        const findBooking = await DB.booking.findFirst({
            where: {
                id: parseInt(bookingId)
            }
        })
        if (findBooking) {
            await DB.booking.delete({
                where: {
                    id: parseInt(bookingId)
                }
            })
            return NextResponse.json({
                message: "Booking cancel"
            })
        }
        return NextResponse.json({
            error: "Booking cancel failed"
        },{status:400})
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 400 })
    }

}