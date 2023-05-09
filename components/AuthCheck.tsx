'use client';
import { useSession } from 'next-auth/react';

export default function AuthCheck({children}: {children: React.ReactNode}) {
    const { data, status } = useSession();
    console.log(data, status);

    return (
        <>{status==='authenticated' ? children : ''}</>
    )
}