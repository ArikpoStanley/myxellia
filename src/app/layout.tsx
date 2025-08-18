import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { mockUser, } from "@/lib/data";
export const metadata: Metadata = {
  title: "Myxellia",
  description: "A mini Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <div className="max-w-[1440px] mx-auto relative">
        <Navbar user={mockUser} />
      </div>
      <body>
          {children}
      </body>
    </html>
  );
}
