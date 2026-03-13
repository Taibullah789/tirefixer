import React from 'react';
import Hero from '../components/Hero';
import ServiceIntro from '../components/ServiceIntro';
import Fitting from '../components/Fitting';
import Range from '../components/Range';
import WhyChoose from '../components/WhyChoose';
import Stats from '../components/Stats';
import About from './About';

const Home = () => (
  <main className="grow">
    <Hero />
    {/* <About /> */}
    <ServiceIntro />
    <Fitting />
    <Range />
    <WhyChoose />
    <Stats />
    
    
  </main>
);

export default Home;
