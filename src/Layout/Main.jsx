import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerFooter = location.pathname.includes("login");
  const headerFooters = location.pathname.includes("signUp");

  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      {headerFooter || headerFooters ? null : (
        <div className={`backdrop sticky top-0 shadow-2xl z-50 ${isScrolled ? "scrolled" : ""}`}>
          <Navbar />
        </div>
      )}
      <Outlet />
      {headerFooter || headerFooters ? null : <Footer />}
    </div>
  );
};

export default Main;
