import { Inter } from "next/font/google"
import "../app/globals.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio",
  description: "Portafolio de Proyectos Marcela Moya",
};

function RootLayout({ children }) {
  return (
    <html lang="en-es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/iconoM.jpg" />
        <style>{inter.styles}</style>
      </head>
      <body className={inter.className}>

        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}

export default RootLayout
