import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arjunmayur.com/"),
  title: "Arjun Mayur | Software Projects, Books, Podcasts, and Links",
  description:
    "Arjun Mayur is building voice AI agents and software projects including Flow News and AdvI.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arjun Mayur",
    description:
      "Software projects, books, podcasts, links, and contact information for Arjun Mayur.",
    type: "website",
    url: "https://arjunmayur.com/",
  },
  twitter: {
    card: "summary",
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arjun Mayur",
  url: "https://arjunmayur.com/",
  email: "mailto:arjmaybca@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/arjun-mayur/",
    "https://github.com/amayur96",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Michigan Stephen M. Ross School of Business",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Vanderbilt University",
    },
  ],
  knowsAbout: [
    "Voice AI agents",
    "Software engineering",
    "Product management",
    "Financial technology",
    "Automated trading systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-foreground font-sans antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
