import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/heads/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "antdevportfolio.com",
  description: "Hire a web dev with the skills to develop your next dream project. Welcome to my portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header/>
        {children}
        
        </body>
    </html>
  );
}
