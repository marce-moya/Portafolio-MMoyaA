import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <html lang="en-es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/flavicon.ico" />
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
