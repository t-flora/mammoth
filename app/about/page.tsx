import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Mammoth',
    description: "We\'re social media for the 21st century"
};

export const dynamic = 'force-static';

export default function About() {
    return (
        <div>
            <h1>We&apos;re Mammoth.</h1>
            <p>There are a lot of tech-related animal-based names out there. We decided to go retro with that trend.</p>
        </div>
    )
}