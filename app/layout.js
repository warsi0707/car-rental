import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/lib/AuthProvider";

import HomeNavbar from "@/components/HomeNavbar";
import ContextProvider from "@/context/ContextProvider";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rent Your Car",
  description: "An app that help you to rent a car",
};

export default  function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" bg-slate-950">
          <div className=" bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
            <AuthProvider>
              <ContextProvider>
              <HomeNavbar />
             {/* <ToasterClient/> */}
              {children}
              <Footer />           
              </ContextProvider>
            </AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
