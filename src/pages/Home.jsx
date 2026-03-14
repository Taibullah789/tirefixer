import React from 'react';
import Hero from '../components/Hero';
import ServiceIntro from '../components/ServiceIntro';

import Range from '../components/Range';
import WhyChoose from '../components/WhyChoose';
import Stats from '../components/Stats';
import AboutIntro from '../components/AboutIntro';

const Home = () => (
  <main className="grow">
    <Hero />
    <AboutIntro />
    <ServiceIntro />
    
    <Range />
    <WhyChoose />
    <Stats />
    
    
  </main>
);

export default Home;
