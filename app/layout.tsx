import "./globals.css";
import Layout from "../components/Layout/Layout";
import { GeistSans } from "geist/font";

export default function RootLayout(props: any) {
  return (
    <html lang="en" className={`scroll-smooth dark`}>
      <head />
      <body className={`${GeistSans.className} dark:bg-mygray dark:text-white`}>
        <Layout {...props} />
      </body>
    </html>
  );
}
