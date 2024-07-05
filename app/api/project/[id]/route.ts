import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const project = await prisma.project.findUnique({ where: { id: params.id } })
        return NextResponse.json({ message: 'Project Retrieved successfully', project }, { status: 201 });
    } catch (error) {
        console.log(error)
    }
}