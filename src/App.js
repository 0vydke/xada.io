import MainNavbar from './components/mainNavbar/mainNavbar';
import NavbarSocial from './components/sideNavbar/sideNavbar';
import ParticleContainer from './components/particles/particleContainer';
import SectionHead from './components/sectionHead/sectionHead';
import './App.scss';
import './assets/style/style.scss';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";

function App() {
  const [navScroll, setOffset] = useState('');

  useEffect(() => {
    window.onscroll = () => {
      setOffset((window.pageYOffset >= 100) ? 'scrolled' : '')
    }
  }, []);

  console.log(navScroll); 
  return (
    <Router>
      <MainNavbar scrollTop={navScroll} />
      <NavbarSocial/>
      <div className="App">
        <ParticleContainer/>
        <SectionHead/>
        <Switch>
          <Route path="">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
