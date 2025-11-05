import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeonGlass Market ? Digital Marketplace",
  description: "A futuristic, colorful, glassmorphism landing page for a digital marketplace.",
  openGraph: {
    title: "NeonGlass Market",
    description: "A futuristic digital marketplace",
    url: "https://agentic-0e8c900a.vercel.app",
    siteName: "NeonGlass Market",
    images: [
      { url: "/og.svg", width: 1200, height: 630 },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeonGlass Market",
    description: "A futuristic digital marketplace",
    images: ["/og.svg"],
  },
  metadataBase: new URL("https://agentic-0e8c900a.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased min-h-screen relative overflow-x-hidden">
        {/* Background gradient grid */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-neon-pink/30 via-neon-purple/20 to-neon-blue/30 blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-neon-blue/30 via-neon-green/20 to-neon-purple/30 blur-3xl opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(255,255,255,0.04)_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
        </div>
        {children}
      </body>
    </html>
  );
}
