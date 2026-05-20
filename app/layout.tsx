import type { Metadata } from "next";
import { Cormorant, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Moin Uddin — Software Engineer",
  description:
    "Backend-focused software engineer who designs distributed systems, solves hard architectural problems, and builds products real users rely on.",
  openGraph: {
    title: "Syed Moin Uddin — Software Engineer",
    description:
      "Backend-focused software engineer who designs distributed systems, solves hard architectural problems, and builds products real users rely on.",
    siteName: "Syed Moin Uddin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/mypic.jpeg",
        width: 1200,
        height: 630,
        alt: "Syed Moin Uddin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Moin Uddin — Software Engineer",
    description:
      "Backend-focused software engineer who designs distributed systems, solves hard architectural problems, and builds products real users rely on.",
    creator: "@moinuddin177535",
    images: ["/mypic.jpeg"],
  },
  metadataBase: new URL("https://moinuddin.info"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
