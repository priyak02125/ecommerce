import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopContextProvider from "./context/ShopContext";
import SearchBar from "../components/SearchBar";
import { ToastContainer } from 'react-toastify';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopContextProvider>
         <ToastContainer/>
          <Header />
           <SearchBar/>
          {children}
          <Footer />
        </ShopContextProvider>
      </body>
    </html>
  );
}
