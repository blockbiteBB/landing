import "./globals.css";
import type { Metadata } from "next";
import { chillaxFont, montserratFont, sourceCodeProFont } from "./utils/font";
import ModalContextProvider from "@/app/contexts/ModalContext";

export const metadata: Metadata = {
    title: "EtherEats",
    description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${chillaxFont.variable} ${montserratFont.variable} ${sourceCodeProFont.variable}`}>
            <body className="font-montserrat">
                <ModalContextProvider>{children}</ModalContextProvider>
            </body>
        </html>
    );
}
