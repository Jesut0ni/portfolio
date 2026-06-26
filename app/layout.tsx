import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jesutoni.com"),
  title: "Jesutoni Omiye — Product, Founder, Builder",
  description:
    "Product Manager at Curacel (YC22) and founder of JEAY Healthcare. Building Plainly and open infrastructure for AI agents.",
  openGraph: {
    title: "Jesutoni Omiye — Product, Founder, Builder",
    description:
      "I build products that hand people the keys to systems built to lock them out.",
    type: "website",
    url: "https://jesutoni.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesutoni Omiye — Product, Founder, Builder",
    description:
      "I build products that hand people the keys to systems built to lock them out.",
    creator: "@Jesut0ni",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
