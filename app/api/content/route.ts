import { NextResponse } from 'next/server';

const posts = [ 
    {
        title: 'Lorem',
        slug: 'lorem-ipsum',
        content:
            'Lorem ipsum dolor sit amet'
    }
];

export async function GET() {
    return NextResponse.json(posts);
}