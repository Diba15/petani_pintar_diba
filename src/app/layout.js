import {SpeedInsights} from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import {Analytics} from "@vercel/analytics/next";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Petani Pintar",
    description: "Aplikasi untuk para petani pintar dalam bernegosiasi.",
    icons: {
        icon: "/Favicon.ico",
    }
};

export default function RootLayout({children}) {
    return (
        <html className={"scroll-smooth"} lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
        >
        {children}
        <SpeedInsights/>
        <Analytics/>
        </body>
        </html>
    );
}
