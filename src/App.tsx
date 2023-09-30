import './App.css';
import 'animate.css/animate.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './Components/Providers/App.provider';
import { Home } from './Components/Home/Home';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { OurWork } from './Components/OurWork/OurWork';
import { GetInvolved } from './Components/GetInvolved/GetInvolved';
import { News } from './Components/News/News';
import { Grants } from './Components/Grants/Grants';
import { PrivacyPolicy } from './Components/PrivacyPolicy/PrivacyPolicy';

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
            <Route index path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
