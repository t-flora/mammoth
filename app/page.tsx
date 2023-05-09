import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '100'
});

export default function Home() {
  const { data } = useSession();
  if(!data) {
    redirect('/api/auth/signin');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
