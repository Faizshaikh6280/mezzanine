import { Montserrat } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"], // Load only needed subsets
  weight: ["400", "700", "600", "500", "800", "900"], // Load only specific weights
  variable: "--font-montserrat", // Define a CSS variable
});

export const metadata = {
  title: "Mezzanine Equity",
  description:
    " Helping Businesses Raise Capital & Navigate t he IPO Journey, with Confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`} id="body">
        {/* <div className="max-w-[1440px] mx-auto"> */}
        <Header />
        {children}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
