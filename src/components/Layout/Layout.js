import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children, setCity, city, getWeatherCity }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar
        setCity={setCity}
        getWeatherCity={getWeatherCity}
        city={city}
      ></NavBar>
      <main className="flex-grow mx-auto sm:mx-0 bg-white">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
