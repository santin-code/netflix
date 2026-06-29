import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Streamflix",
  description: "Tu plataforma de entretenimiento personal",
  openGraph: {
    title: "Streamflix - Tu cine sin límites",
    description: "Explora nuestra colección de películas y series",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8580038362736145"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script id="adsense-init" strategy="afterInteractive">{`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}</Script>
      </head>
            <body>
        {children}    
        
      </body>
    </html>
  );
}
