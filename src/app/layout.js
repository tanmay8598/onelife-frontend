import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata = {
  title:
    "Best Visa Services in Dubai | UAE | Travel agency in Dubai - One Life Tourism",
  description: "Onelife endless adventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${pacifico.variable}`}>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
