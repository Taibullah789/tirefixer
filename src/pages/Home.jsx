import React from 'react';
import Hero from '../components/Hero';
import ServiceIntro from '../components/ServiceIntro';
import { Helmet } from "react-helmet-async";
import Range from '../components/Range';
import WhyChoose from '../components/WhyChoose';
import Stats from '../components/Stats';
import AboutIntro from '../components/AboutIntro';

const Home = () => (
  <main className="grow">
    <Helmet>
        <title>Tyre Fixer UAE | 24/7 Mobile Tyre Repair</title>

        <meta
          name="description"
          content="Tyre Fixer UAE provides 24/7 mobile tyre repair and emergency roadside tyre services."
        />

        <link rel="canonical" href="https://tyrefixerr.com/" />
      </Helmet>
    <Hero />
    <AboutIntro />
    <ServiceIntro />
    
    <Range />
    <WhyChoose />
    <Stats />
    
    
  </main>
);

export default Home;
