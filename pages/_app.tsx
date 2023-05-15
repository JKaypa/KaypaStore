import Layout from "@/components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import "slick-carousel/slick/slick.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${open_sans.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
