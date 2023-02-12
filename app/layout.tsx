import "./globals.css";
import { Roboto } from "@next/font/google";
import Layout from "../components/Layout/Layout";

const roboto = Roboto({
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout(props: any) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={roboto.className}>
        <Layout {...props} />
      </body>
    </html>
  );
}
