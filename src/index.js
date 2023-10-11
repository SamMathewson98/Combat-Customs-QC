import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import GunList from './Pages/GunList';
import AccessoriesPage from './Pages/AccessoriesPage';
import GunCarousel from './Components/GunCarousel';
import Services from './Pages/Services';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';
import AboutUs from './Pages/AboutUs';
import CartPage from './Pages/CartPage';
//import { CartProvider } from './Components/CartContext';
import { AccountProvider } from './Components/AccountContext';
import CreateLogin from './Pages/CreateLogin';
import ReviewCart from './Pages/ReviewCart';
import ContactUs from './Pages/ContactUs';
import FFLTransfers from './Pages/FFLTransfers';
import SubmittedSuccessfully from './Components/SubmittedSuccessfully';
import ApiTestPage from './Pages/ApiTestPage';
import PartsPage from './Pages/PartsPage';
import SellPage from './Pages/SellPage';
import ProfilePage from './Pages/ProfilePage';
import Orders from './Pages/Orders';
import GalleryPage from './Pages/GalleryPage';
import GuestCheckout from './Pages/GuestCheckout';
import MemberCheckout from './Pages/MemberCheckout';
import OwnersPortal from './Pages/OwnersPortal';
import HowItWorks from './Pages/HowItWorks';
import UpdatePassword from './Pages/UpdatePassword';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';

// Add the icons you imported to the library
library.add(faUser, faShoppingCart, faHome);

const root = createRoot(document.getElementById('root'));

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
     {/* const fetchUserData = async () => {
        try {
          const userId = user.id;
          const token = localStorage.getItem("token");
  
          const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
          };
  
          // Make an API call to fetch the user data
          const userDataResponse = await axios.get(`http://localhost:3002/api/get-user-data/${userId}`, { headers });
  
          if (userDataResponse.status === 200) {
            const updatedUserData = userDataResponse.data.user;
            console.log(updatedUserData)
            // Update the local state with the fetched user data
            setUserData(updatedUserData);
          } else {
            console.error('Error fetching user data:', userDataResponse.data.message);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };*/}
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <React.StrictMode>
      <AccountProvider>
       {/* <CartProvider> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/GunList" element={<GunList />} />
              <Route path="/GunList/:id" element={<GunList />} />
              <Route path="/Accessories" element={<AccessoriesPage />} />
              <Route path="/GunCarousel" element={<GunCarousel />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Gallery" element={<GalleryPage />} />
              <Route path="/FFL Transfers" element={<FFLTransfers />} />
              <Route path="/Parts" element={<PartsPage />} />
              <Route path="/Sell" element={<SellPage />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Cart" element={<CartPage />} />
              <Route
                path="/CreateAccount"
                element={<CreateLogin onLogin={handleLogin} />}
              />
              <Route path='/Checkout' element={<ReviewCart />} />
              <Route path='/ContactUs' element={<ContactUs />} />
              <Route path='/HowItWorks' element={<HowItWorks />} />
              <Route path="/Submitted Successfully" element={<SubmittedSuccessfully />} />
              <Route path="/APItest" element={<ApiTestPage />} />
              <Route path="/Profile" element={<ProfilePage />} />
              <Route path="/OwnersPortal" element={<OwnersPortal />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path='/ForgotPassword' element={<ForgotPassword />} />
              <Route path='/ResetPassword' element={<ResetPassword />} />
              <Route path='/UpdatePassword' element={<UpdatePassword />} />
              <Route path="/GuestCheckout" element={<GuestCheckout />} />
              <Route path="/MemberCheckout" element={<MemberCheckout />} />
            </Routes>
          </BrowserRouter>
      {/*  </CartProvider> */}
      </AccountProvider>
    </React.StrictMode>
  );
};

root.render(<Index />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
