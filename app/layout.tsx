import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Lorenzo Alberto | Portfolio",
    description: "Portfolio profissional de projetos, produtos e experimentos.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
