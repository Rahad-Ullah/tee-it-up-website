import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { cn } from "@/lib/utils";
import { UserProvider } from "@/hooks/useUser";
import { Toaster } from "@/components/ui/sonner";
import { USER_CACHE_COOKIE, parseUserCacheCookie } from "@/lib/userCache";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#047857", // Set to your primary brand color (e.g., deep golf green or dark navy)
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.teeitupgolf.com.au"),
  title: {
    default: "Tee It Up Golf | Best Golf Simulators & Coaching",
    template: "%s | Tee It Up Golf",
  },
  description:
    "Experience state-of-the-art indoor golf simulators, professional coaching, social leagues, and bay hire at Tee It Up Golf. Play world-class courses year-round.",
  applicationName: "Tee It Up Golf",
  keywords: [
    "Tee It Up Golf",
    "Indoor Golf Australia",
    "Golf Simulator Hire",
    "TrackMan Golf",
    "Golf Lessons Australia",
    "Virtual Golf Course",
    "Indoor Golf Simulator Melbourne",
    "Golf Bay Booking",
  ],
  authors: [{ name: "Tee It Up Golf" }],
  creator: "Tee It Up Golf",
  publisher: "Tee It Up Golf",
  category: "Sports & Recreation",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.teeitupgolf.com.au",
    siteName: "Tee It Up Golf",
    title: "Tee It Up Golf | Premier Indoor Golf Simulators & Coaching",
    description:
      "Play world-renowned courses in premium indoor simulators. Book your bay, improve your swing with certified pros, or host your next corporate event.",
    images: [
      {
        url: "/og-image.png", // Place an optimized 1200x630 banner in /public
        width: 1200,
        height: 630,
        alt: "Tee It Up Golf - Indoor Simulators & Bays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tee It Up Golf | Premier Indoor Golf Simulators",
    description:
      "Book indoor golf simulator bays, take pro lessons, and play iconic courses year-round at Tee It Up Golf.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialUser = parseUserCacheCookie(cookieStore.get(USER_CACHE_COOKIE)?.value);

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <UserProvider initialUser={initialUser}>
          {children}
          <Toaster richColors position="top-center" />
        </UserProvider>
      </body>
    </html>
  );
}