import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI recruitment engine to hire deeply vetted engineers fast | neuro1",
  description: "Generated by create next app",
  icons: {
    icon: ['/favicon.png?v=4']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
