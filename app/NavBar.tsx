import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';
import { SignInButton, SignOutButton } from '@/components/authButtons';
import AuthCheck from '@/components/AuthCheck';

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image 
                    src='/next.svg'
                    width={216}
                    height={30}
                    alt='Mammoth-Next logo'
                />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/about'}>about</Link>
                </li>
                <li>
                    <Link href={'/blog'}>blog</Link>
                </li>
                <li>
                    <Link href={'/users'}>users</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
                <li>
                    <AuthCheck>
                        <SignOutButton />
                    </AuthCheck>
                </li>
            </ul>
        </nav>
    )
}