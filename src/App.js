import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import Error from './components/Error';
import Music from './features/Music';
import MeditatePage from './pages/MeditatePage';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' exact element={<Homepage />}/>
        <Route path='meditate'>
          <Route index element={<MeditatePage/>} />
          <Route path='music' element={<Music/>}/>
        </Route>
        <Route path='about'  element = {<AboutUsPage/>}/>
        <Route path='contact'element ={<ContactPage/>}/>
        <Route path='*' element= {<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
