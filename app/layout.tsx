import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from "@/app/components/Providers";

import Appbar from "@/app/components/Appbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Codes Conan Login Auth',
    description: 'Created by Codes Conan',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Appbar/>
            {children}
        </Providers>
        </body>
        </html>
    )
}
