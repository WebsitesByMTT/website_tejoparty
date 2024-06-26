import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Schema from "./Schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tejowatch party - Install and watch together with friends",
  description:
    "Tejowatch Party is the new way to binge all your favorite series and movies to watch together with friends.",
  keywords:
    " adblocker chrome extension, adblock plus chrome, ad blocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome, adb plus chrome, adblock browser chrome, adblock chrome, youtube no ads, chrome youtube adblocker, hulu without ads, pop up blocker chrome, Best ad blocker fireforx, twitch adblock firefox, adguard ablocker, Pop- up ads, ad blocker google chrome, chrome extension adblock and google chrome ad blocker",
  openGraph: {
    title: "Tejowatch party - Install and watch together with friends",
    description:
      "Tejowatch Party is the new way to binge all your favorite series and movies to watch together with friends.",
    url: "https://www.tejoparty.com/",
    type: "website",

  },
  icons: {
    icon: '/favicon.png',
  },
  metadataBase: new URL("https://www.tejoparty.com/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta
          name="google-site-verification"
          content="hbBxi_dOjH2Sxlv0z7qsLt9P3MRtXlq-NWcOipTX50s"
        />
        <meta property="og:title" content="tejowatch party - install and watch together with friends" />
        <meta property="og:type" content="tejowatch party is the new way to binge all your favorite series and movies to watch together with friends." />
        <meta property="og:url" content="https://www.tejoparty.com/" />
        <meta property="og:image" content="https://www.tejoparty.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.40b850fe.png&w=640&q=75" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-01WHL0EHPQ" strategy="beforeInteractive" />
        <Script
          strategy="beforeInteractive"
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-01WHL0EHPQ');
            `,
          }}

        />
      </head>
      <body className={inter.className}>
        <Schema />
        {children}
      </body>
    </html>
  );
}
