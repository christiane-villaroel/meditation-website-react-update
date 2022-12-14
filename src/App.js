import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUsPage from './pages/AboutUsPage';
import ContactForm from './features/ContactForm';
import TimerPage from './pages/FeaturePages.js/TimerPage';
import FeaturesList from './features/FeaturesList/FeaturesList';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='about' element = {<AboutUsPage/>}/>
        <Route path='contact' element={<ContactForm />}/>
        <Route path='timer' element={<TimerPage/>}/>
        <Route path='/:id' element={<FeaturesList/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
