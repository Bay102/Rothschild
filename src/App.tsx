// import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './Components/Providers/App.provider';
import { Home } from './Components/Home/Home';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { OurWork } from './Components/OurWork/OurWork';
import { Grants } from './Components/Grants/Grants';
import { GetInvolved } from './Components/GetInvolved/GetInvolved';
import { News } from './Components/News/News';

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/about-us" element={<AboutUs />} />
            <Route index path="/our-work" element={<OurWork />} />
            <Route index path="/grants" element={<Grants />} />
            <Route index path="/get-involved" element={<GetInvolved />} />
            <Route index path="/news" element={<News />} />
          </Routes>
          <ToastContainer position="top-center" autoClose={2200} />
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
