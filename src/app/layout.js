import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "NEXT HERO",
    template: "%s - NEXT HERO",
  },
  description: "Powerful next website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
