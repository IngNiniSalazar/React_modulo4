import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import React from 'react';
import HomePage from './pages/homePage/homePage';
import AboutPage from './pages/aboutPage/aboutPage';
import NavbarComponent from './component/nabvar/navbarComponent';
import UserPage from './pages/userPage/userPage';
import NotFoundPage from './pages/notFound/notFoundPage';
import UserParam from './pages/userParampege/userParam';
import CharacterPage from './pages/characterPage/characterPage';
import EpisodesPage from './pages/episodesPage/episodesPage';
import LocationPage from './pages/locationPage/locationPage';


function App() {
  return (
 <div>
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePage/>}> </Route>
        <Route path='/character' element={<CharacterPage/>}> </Route>
        <Route path='/location' element={<LocationPage/>}> </Route>
        <Route path='/episode' element={<EpisodesPage/>}> </Route>
        <Route path='/*' element={<NotFoundPage/>}> </Route>
      </Routes>
    </BrowserRouter>
  
 </div>
  )
}

export default App

