import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/provider/auth-provider";

export const metadata: Metadata = {
  title: "NEXT AUTH",
  description: "",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
