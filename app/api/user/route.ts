import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export default async function PUT(req: Request) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const data = await req.json();
    data.age = Number(data.age);

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail,
        },
        data,
    })

    return NextResponse.json(user);
}

export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;
    const currentUserId = await prisma.user
        .findUnique({
            where: {
                email: currentUserEmail,
            }
        })
        .then((user) => user?.id!);

    const targetUserId = req.nextUrl.searchParams.get('targetUserId');
    const record = await prisma.follows.delete({
        where: {
            followerId_followingId: {
                followerId: currentUserId,
                followingId: targetUserId,
            }
        }
    });

    return NextResponse.json(record);
}