import React from "react";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Layout = ({ children, setCity, city, getWeatherCity }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar city={city} getWeatherCity={getWeatherCity} setCity={setCity} />
      <main className="flex-grow mx-auto bg-white sm:mx-0" data-cy="notFound">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
