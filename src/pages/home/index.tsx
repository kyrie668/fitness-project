import React from 'react';
import PropTypes from 'prop-types';
import { HeroSection } from './components/hero-section';
import  TrainingPlanGrid from './components/feature-section';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrainingPlanGrid />
      
    </>
  );
};

Home.propTypes = {};

export default Home;
