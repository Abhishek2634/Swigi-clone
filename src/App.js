// src/App.js
import React, { useState } from 'react';
import './index.css';
import Header from './components/Header'; // Ensure these paths are correct
import MainSection1 from './components/MainSection1';
import MainSection2 from './components/MainSection2';
import MainSection3 from './components/MainSection3';
import MainSection4 from './components/MainSection4';
import MainSection5 from './components/MainSection5';
import BestPlacesSection from './components/BestPlacesSection';
<<<<<<< Updated upstream
import BestGroceries from './components/BestGroceries';
import  BottomNavbar  from './components/BottomNavbar';
import  MobileNavbar  from './components/MobileNavbar';
import  ContactUs  from './components/ContactUs';
import  Login  from './components/Login';
import Footer  from './components/footer';
import Instamart  from './components/Instamart';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap once in your entry point
import SidePanelModal from './components/SidePanelModal';
=======
import BottomNavbar from './components/BottomNavbar';
import MobileNavbar from './components/MobileNavbar';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Instamart from './components/Instamart';
import SignUp from './components/SignUp';

import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> Stashed changes

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
<<<<<<< Updated upstream
    <div>
      
      <Header toggleSidebar={toggleSidebar}/>
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
      <BestPlacesSection />
      <MobileNavbar/>
      <ContactUs/>
      <SidePanelModal isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Login/>
      <BestGroceries/>
      <Instamart/>
      <MobileNavbar/>
    </div>
=======
    <>
      {/* Header visible on all pages */}
      <Header />

      {/* Routes to different pages */}
      <Routes>
        {/* Homepage route, renders all sections */}
        <Route path="/" element={
          <>
            <MainSection1 />
            <MainSection2 />
            <MainSection3 />
            <MainSection4 />
            <MainSection5 />
          </>
        } />
        
        {/* Other pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/instamart" element={<Instamart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/best-places" element={<BestPlacesSection />} />

        {/* SignUp page will replace other content when navigated */}
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

      {/* Bottom Navbar, Mobile Navbar, and Footer always visible except on /SignUp */}
      <Routes>
        <Route path="/SignUp" element={null} />  {/* Prevent navbar/footer on SignUp page */}

        <Route path="/" element={
          <>
            <BottomNavbar />
            <MobileNavbar />
            <Footer />
          </>
        } />
      </Routes>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
