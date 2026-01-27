import "./globals.css";
// app/layout.js

export const metadata = {
  title: "The International School Ltd Secondary – Quality Education in Sierra Leone",
  description:
    "The International School Ltd Secondary provides quality secondary education, strong discipline, character development, and modern learning in Sierra Leone.",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      { url: "/icons/international-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/international-512x512.png",sizes:"512x512", type: "image/png" },
    ],
    shortcut: "/icons/international-192x192.png",
    apple: "/icons/international-512x512.png",
  },

  keywords: [
    "The International School Ltd Secondary",
    "Secondary School in Sierra Leone",
    "Private Secondary Schools in Sierra Leone",
    "Best Secondary Schools in Sierra Leone",
    "Secondary School Freetown",
    "WAEC School Sierra Leone",
    "BECE School Sierra Leone",
    "International Schools Sierra Leone",
    "School Portal Sierra Leone",
    "Secondary Education Sierra Leone",
  ],

  authors: [{ name: "The International School Ltd Secondary" }],
  creator: "The International School Ltd Secondary",
  publisher: "The International School Ltd Secondary",

  metadataBase: new URL("https://www.internationalschoolltd.sl"),
  applicationName: "The International School Ltd Secondary Portal",
  classification: "Educational Institution",

  robots: { index: true, follow: true },
  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical: "https://www.internationalschoolltd.sl",
  },

  openGraph: {
    title: "The International School Ltd Secondary – Excellence in Education",
    description:
      "A leading secondary school in Sierra Leone focused on academic excellence, discipline, and preparation for BECE and WASSCE (WAEC).",
    url: "https://www.internationalschoolltd.sl",
    siteName: "The International School Ltd Secondary",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/international-logo.jpg",
        width: 1200,
        height: 630,
        alt: "The International School Ltd Secondary Campus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The International School Ltd Secondary – Sierra Leone",
    description:
      "Quality secondary education with discipline, strong academics, and digital school services.",
    images: ["/images/international-logo.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3f2a8c", // matches your purple logo
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#3f2a8c" />
        <meta name="color-scheme" content="light" />
      </head>
      <body>{children}</body>
    </html>
  );
}
