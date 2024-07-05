import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { title, description, date, githubLink, thumb, liveLink } = data;

        if (!title || !description || !date || !githubLink) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }

        const project = await prisma.project.create({
            data: {
                title,
                description,
                date: new Date(date),
                githubLink,
                thumb,
                liveLink,
            },
        });

        return NextResponse.json({ message: 'Project created successfully', project }, { status: 201 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Error creating project' }, { status: 500 });
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