import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Lorenzo Alberto | Desenvolvedor Full Stack",
    description:
        "Portfólio profissional de Lorenzo Alberto: desenvolvimento full stack, dados, BI e inteligência artificial aplicada.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
