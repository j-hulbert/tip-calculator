import "../styles/globals.css";
import { Space_Mono } from "@next/font/google";
import type { AppProps } from "next/app";

const space_mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={space_mono.className}>
      <Component {...pageProps} />
    </main>
  );
}
