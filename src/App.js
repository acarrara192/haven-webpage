import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lore from './components/lore/lore'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar';
import ScrollToTop from './components/navbar/scroll-to-top';
import Rules from './components/rules/rules';
import Downtime from './components/downtime/downtime';
import Carousing from './components/downtime/carousing';
import Crafting from './components/downtime/crafting';
import Crime from './components/downtime/crime';
import Gambling from './components/downtime/gambling';
import MonsterHunting from './components/downtime/monster-hunting';
import PitFighting from './components/downtime/pit-fighting';
import Relaxation from './components/downtime/relaxation';
import ReligiousService from './components/downtime/religious-service';
import Research from './components/downtime/research';
import Scribing from './components/downtime/scribing';
import SellingMagicItems from './components/downtime/selling-magic-items';
import SpellwroughtTattoos from './components/downtime/spellwrought-tattoos';
import TrainingAnimals from './components/downtime/training-animals';
import Training from './components/downtime/training';
import Work from './components/downtime/work';


function App() {
  return (    
    <div>
      <Router>    
      <ScrollToTop />   
        <Navbar></Navbar>
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/lore" element={<Lore/>} />
          <Route path="/rules" element={<Rules/>} />
          <Route path="/downtime" element={<Downtime />}/>
            <Route path="/downtime/carousing" element={<Carousing />} />
            <Route path="/downtime/crafting" element={<Crafting />} />
            <Route path="/downtime/crime" element={<Crime />} />
            <Route path="/downtime/gambling" element={<Gambling />} />
            <Route path="/downtime/monster-hunting" element={<MonsterHunting />} />
            <Route path="/downtime/pit-fighting" element={<PitFighting />} />
            <Route path="/downtime/relaxation" element={<Relaxation />} />
            <Route path="/downtime/religious-service" element={<ReligiousService />} />
            <Route path="/downtime/research" element={<Research />} />
            <Route path="/downtime/scribing" element={<Scribing />} />
            <Route path="/downtime/selling-magic-items" element={<SellingMagicItems />} />
            <Route path="/downtime/spellwrought-tattoos" element={<SpellwroughtTattoos />} />
            <Route path="/downtime/taming-animals" element={<TrainingAnimals />} />
            <Route path="/downtime/training" element={<Training />} />
            <Route path="/downtime/work" element={<Work />} />
        </Routes>
        </div>
      </Router> 
    </div>    
  );
}

export default App;
