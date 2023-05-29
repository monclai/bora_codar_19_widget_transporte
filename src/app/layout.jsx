"use client"
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['500', '700']
})

import { CSSReset } from '../public/CSSReset.js'


export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Widget de transporte - bora codar 19</title>
            </head>
            <body>
                <div className={inter.className}>
                    <CSSReset />
                    {children}
                </div>
            </body>
        </html>
    );
}
