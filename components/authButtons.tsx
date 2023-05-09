'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
    const { data, status } = useSession();
    console.log(data, status);

    if(status==='loading') {
        return <>Loading...</>
    }

    if(status==="authenticated") {
        return (
            <Link href={`/dashboard`}>
                <Image
                    src={data.user?.image ?? '/Richard_dawkins_lecture.jpg'}
                    width={32}
                    height={32}
                    alt={`${data.user?.name}`}
                />
            </Link>
        )
    } else {
        return <button onClick={() => signIn()}>sign in</button>
    }
}

export function SignOutButton() {
    return (<button onClick={() => signOut()}>sign out</button>);
}