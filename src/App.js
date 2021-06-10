import MainNavbar from './components/mainNavbar/mainNavbar';
import ParticleContainer from './components/particles/particleContainer';
import SectionHead from './components/sectionHead/sectionHead';
import SectionAbout from './components/sectionAbout/sectionAbout';
import SectionSolutions from './components/sectionSolutions/sectionSolutions';
import SectionRoadmap from './components/sectionRoadmap/sectionRoadmap';
import SectionDistribution from './components/sectionDistribution/sectionDistribution';
import SectionTeam from './components/sectionTeam/sectionTeam';
import SectionFAQ from './components/sectionFAQ/sectionFAQ';
import Footer from './components/footer/footer';
import './App.scss';
import './assets/style/style.scss';
import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  const [navScroll, setOffset] = useState('');
  const [aboutScroll, setAbout] = useState('');
  const [solutionsScroll, setSolutions] = useState('');


  useEffect(() => {
    window.onscroll = () => {
      setOffset((window.pageYOffset >= 100) ? 'scrolled' : '');
      setAbout((window.pageYOffset >= 850 || aboutScroll !== "animate__animated animate__fadeInUp") ? 'animate__animated animate__fadeInUp' : '');
      setSolutions((window.pageYOffset >= 1698 || solutionsScroll !== "animate__animated animate__fadeInUp") ? 'animate__animated animate__fadeInUp' : '');
    };
  }, []);
  
  document.body.classList.add('loaded');
  return (
    <Router>
      <MainNavbar scrollTop={navScroll} />
      <div className="App">
        <ParticleContainer/>
        <ScrollAnimation animateIn='fadeIn'
        animateOnce={true}>
          <SectionHead/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'
        animateOnce={true}>
          <SectionAbout aboutScroll={aboutScroll}/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'
        animateOnce={true}>
          <SectionSolutions solutionsScroll={solutionsScroll}/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'
        animateOnce={true}>
          <SectionRoadmap/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'
        animateOnce={true}>
          <SectionDistribution/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'
        animateOnce={true}>
          <SectionTeam/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'
        animateOnce={true}>
          <SectionFAQ/>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'
        animateOnce={true}>
          <Footer/>
        </ScrollAnimation>
      </div>
    </Router>
  );
}

export default App;
