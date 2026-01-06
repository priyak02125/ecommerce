import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopContextProvider from "./context/ShopContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopContextProvider>
          <Header />
          {children}
          <Footer />
        </ShopContextProvider>
      </body>
    </html>
  );
}
