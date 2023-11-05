import React from 'react';
import Reminder from './Reminder';

function ReminderHome() {
  // Replace with your actual flight time
  const flightTime = new Date('2023-11-09T10:00:00');

  return (
    <div>
      <h1>Welcome to Your Flight Reminder</h1>
      <div className="fun-images">
        <img src="airplane-image.jpg" alt="Airplane" />
        <img src="beach-image.jpg" alt="Beach" />
        {/* Add more fun images or elements */}
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
