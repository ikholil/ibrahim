import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient()
export async function POST(req: NextRequest, res: NextApiResponse) {
    try {
        const { title, description, thumb, date, liveLink, githubLink } = await req.json()
        if (!title || !description || !date || !githubLink) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }
        const project = await prisma.project.create({ data: { title, description, thumb, date, liveLink, githubLink } })
        return NextResponse.json({ message: 'User created successfully', project }, { status: 201 });

    } catch (err) {
        console.log(err)
    }
}

export async function GET() {
    try {
        const projects = await prisma.project.findMany({})
        return NextResponse.json({ message: 'Projects Retrieved successfully', projects }, { status: 201 });
    } catch (error) {
        console.log(error)
    }
}