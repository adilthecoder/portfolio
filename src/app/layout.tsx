import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ClickEffect from "@/components/ClickEffect";
import EffectsRenderer from "@/components/EffectsRenderer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { EffectsProvider } from "@/contexts/EffectsContext";
import ToastProvider from "@/components/ToastProvider";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Adil Farhan",
  description: "Adil Farhan - Software Engineer",
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#020711" />
      </head>
      <body className="overflow-x-hidden antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <EffectsProvider>
            <ToastProvider />
            <EffectsRenderer />
            <ClickEffect />
            <ScrollProgress />
            <Header />
            <Breadcrumbs />
            <main id="main-content" className="min-h-screen overflow-x-hidden" role="main">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
            <Footer />
          </EffectsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
