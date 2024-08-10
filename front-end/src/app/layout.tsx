import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/page";
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamasuthra",
  description: "Your wedding companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="wrapper">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
