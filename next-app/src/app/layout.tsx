import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: `Gabriel Goulis' Personal Website`,
  description: `A personal website containing my portfolio, research and blog.`,
  openGraph: {
    title: "Gabriel Goulis' Personal Website",
    images: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}
      </head>
      <body className="flex flex-col min-h-screen bg-background text-black font-montserrat">
        <Header />
        <div className="flex-grow pb-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
