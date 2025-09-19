import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import  { DB } from "@/lib/PrismaClientProvider";


export async function POST(req) {
    const { name, email, password, adminCode } = await req.json()
    // try {
        if (!name || !email || !password) {
            return NextResponse.json({
                error: "All input required"
            }, { status: 404 })
        }
        const existingUser = await DB.user.findFirst({
            where: {
                email: email
            }
        })
        if (existingUser) {
            return NextResponse.json({
                error: "User already exist with this email"
            }, {
                status: 404
            })
        }
        const HashPassword = await bcrypt.hash(password, 10)
        const isAdmin = adminCode === process.env.Admin_Secret
        if (isAdmin) {
            const user = await DB.user.create({
                data: {
                    name,
                    email,
                    password: HashPassword,
                    role: 'admin'
                }
            })
            return NextResponse.json({
                message: "Signup success"
            })
        } else {
            const user = await DB.user.create({
                data: {
                    name,
                    email,
                    password: HashPassword,
                }
            })
            return NextResponse.json({
                message: "Signup success",
            })
        }


    // } catch (error) {
    //     return NextResponse.json({
    //         error: error
    //     }, { status: 404 })
    // }

}
export async function GET() {
    try {
        const user = await DB.user.findMany({})
        return NextResponse.json({
            user: user
        })
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 404 })
    }
}