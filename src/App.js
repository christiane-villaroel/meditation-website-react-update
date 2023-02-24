import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUsPage from './pages/AboutUsPage';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' exact element={<Homepage />}/>
        <Route path='about' exact element = {<AboutUsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
