import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "One more friend, Thousands more fun! - Monito",
  description: "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
