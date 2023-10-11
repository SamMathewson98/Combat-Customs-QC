// AppMaster.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use 'react-router-dom' here
//import App from './App';
import Navi from './Components/Navi.js';
import HomePage from './Pages/HomePage.js'
import GunList from './Pages/GunList.js'
import GunCarousel from './Components/GunCarousel.js';
import Services from './Pages/Services.js'
import AboutUs from './Pages/AboutUs.js';
import CartPage from './Pages/CartPage.js';

const AppMaster = () => {
  return (
      <div>
        {/*<App />*/}
        <Navi />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop_Firearms" element={<GunList />} />
          <Route path="/GunCarousel" element={<GunCarousel />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Cart" element={<CartPage />} />
        </Routes>
      </div>
      
  );
};

export default AppMaster;


