import './globals.css';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Verfy',
};

const workSans = Work_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={workSans.className}>{children}</body>
        </html>
    );
}
