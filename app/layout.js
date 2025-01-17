import Footer from "./components/Footer";
import TopFooter from "./components/TopFooter";
import "./globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
