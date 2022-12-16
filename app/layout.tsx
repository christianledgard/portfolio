import "./globals.css";
import title from "../assets/images/title.svg";
import Image from "next/image";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  // style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={roboto.className}>
        <nav>
          <div className="p-6">
            <Image
              src={title}
              alt="Picture of the author"
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="w-full border-2 border-black" />
          <div className="flex justify-between h-12">
            <div className="flex items-center">
              <a href="#about-me" className="px-4">
                about me
              </a>
              <a href="#projects" className="px-4">
                projects
              </a>
              <a href="#contact" className="px-4">
                contact
              </a>
            </div>
            <a
              className="inline-block w-auto px-8 h-full bg-black text-white content-end"
              href="mailto:christianledgard@gmail.com"
            >
              <span className="flex items-center h-full">send me an email</span>
            </a>
          </div>
          <div className="w-full border-2 border-black" />
        </nav>
        {children}
      </body>
    </html>
  );
}
