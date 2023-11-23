import React from 'react';
import {Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {

  const navigate = useNavigate();

  const handleBrowseHotels = () => {
    navigate('/search');
  };

  return (
    <div fluid className="hero-section jumbotron">
      <div className="overlay"></div>
      <Container className="text-container">
        <h1 className="animated-text-header">HotelStays</h1>
        <p className="animated-text-p">Book your hotel fast and easy!</p>
        <Button variant="warning" onClick={handleBrowseHotels} style={{fontSize: '1.3em'}}>
            Browse Hotels
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
