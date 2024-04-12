import { Inter } from "next/font/google";
import "./globals.css";

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
    // url: "https://www.trueadblocker.net/",
    type: "website",
    // images: "https://www.trueadblocker.net/favicon.ico",
  },
  // metadataBase: new URL("https://www.trueadblocker.net/"),
  // alternates: {
  //   canonical: "/",
  // },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
