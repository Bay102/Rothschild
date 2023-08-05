// import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './Components/Providers/App.provider';
import { Home } from './Components/Home/Home';

function App() {


  return (
    <>
    <AppProvider>
     <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={2200} />
      </BrowserRouter>
    </AppProvider>
    </>
  )
}

export default App
