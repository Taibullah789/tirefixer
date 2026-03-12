import React from 'react';
import Hero from '../components/Hero';
import ServiceIntro from '../components/ServiceIntro';
import Fitting from '../components/Fitting';
import Range from '../components/Range';
import WhyChoose from '../components/WhyChoose';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import About from './About';

const Home = () => (
  <main className="grow">
    <Hero />
    <About />
    <ServiceIntro />
    <Fitting />
    <Range />
    <WhyChoose />
    <Stats />
    <Testimonials />
    {/* "Who we are" section from original homepage */}
    {/* <About /> */}
  </main>
);

export default Home;
