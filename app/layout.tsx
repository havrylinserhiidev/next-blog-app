import './globals.css'
import {Inter} from 'next/font/google'
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <TheHeader></TheHeader>
        <main className="container">
            {children}
        </main>
        <TheFooter></TheFooter>
        </body>
        </html>
    )
}
