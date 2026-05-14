import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Honnavar PG",
  description: "PG finder app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-950 text-white px-8 py-4 flex gap-6 border-b border-gray-800">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/add-room">Add Room</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}