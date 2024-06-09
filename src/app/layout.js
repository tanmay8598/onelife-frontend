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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mc9nk012sa");
                  `,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GXBCNE9S1K"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GXBCNE9S1K');
                  `,
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
