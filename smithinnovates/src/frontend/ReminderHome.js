import React from 'react';
import Reminder from './Reminder';
//import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/ReminderHome.css'
import { Carousel } from 'react-responsive-carousel';

function ReminderHome() {
  // Replace with your actual flight time
  const flightTime = new Date('2023-11-09T10:00:00');

  


  return (
    <div>
      <h1>Welcome to Your Flight Reminder</h1>
      <div className="main-carousel-container">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          <div className="carousel-container">
            <img src="/media/tower.jpg" alt="" />
          </div>
          <div className="carousel-container">
            <img src="/media/tower1.jpg" alt="" />
          </div>
          <div className="carousel-container">
            <img src="/media/inflight.jpg" alt="" />
          </div>
          
        </Carousel>
      </div>
      <h2>Flight Details</h2>
      {/* Display flight information */}
      <Reminder flightTime={flightTime} />
      <div className="fun-messages">
        <p>Get ready for an amazing journey!</p>
        <p>Don't forget to pack your favorite book.</p>
        {/* Add more fun messages or tips */}
      </div>
    </div>
  );
}

export default ReminderHome;
