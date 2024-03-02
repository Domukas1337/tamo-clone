import { db } from "@/app/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";

const userSchema = z
    .object({
        name: z.string().min(1, "Name is required").max(20),
        email: z.string().min(1, "Email is required").email("Invalid email"),
        password: z.string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters long"),
    })

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, name, password } = userSchema.parse(body);

        const existingUserByEmail = await db.user.findUnique({
            where: {
                email: email
            }
        })
        if(existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exists" }, { status: 409 })
        }

        const existingUserByName = await db.user.findUnique({
            where: {
                name: name
            }
        })
        if(existingUserByName) {
            return NextResponse.json({ user: null, message: "User with this username already exists" }, { status: 409 })
        }

        const hashPassword  = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                email, name, password: hashPassword
            }
        })
        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({ user: rest, message: "User created!"}, { status: 201 })
    } catch(error)
     {
        return NextResponse.json({message: "Something went wrong!"}, { status: 500 })
    }
}