import React, { useState } from 'react';
import './styles/Searchflight.css';

function BookFlight() {
  const [tripType, setTripType] = useState('round-trip');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  // List of airports as options
  const airports = [
    'Airport 1',
    'Airport 2',
    'Airport 3',
    // Add more airports as needed
  ];

  return (
    <div className="book-flight-page">
      <h1>Search Flight</h1>
      <div className="trip-type">
        <label>
          <input
            type="radio"
            name="trip-type"
            value="round-trip"
            checked={tripType === 'round-trip'}
            onChange={() => setTripType('round-trip')}
          />
          Round Trip
        </label>
        <label>
          <input
            type="radio"
            name="trip-type"
            value="one-way"
            checked={tripType === 'one-way'}
            onChange={() => setTripType('one-way')}
          />
          One-Way
        </label>
      </div>
      <div className="location-inputs">
        <label>From:</label>
        <select
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
        >
          <option value="">Select an airport</option>
          {airports.map((airport, index) => (
            <option key={index} value={airport}>
              {airport}
            </option>
          ))}
        </select>
        <label>To:</label>
        <select
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
        >
          <option value="">Select an airport</option>
          {airports.map((airport, index) => (
            <option key={index} value={airport}>
              {airport}
            </option>
          ))}
        </select>
      </div>
      <div className="date-inputs">
        <label>Departure Date:</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        {tripType === 'round-trip' && (
          <>
            <label>Return Date:</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </>
        )}
      </div>
      <div className="passenger-input">
        <label>Number of Passengers:</label>
        <input
          type="number"
          min="1"
          value={passengerCount}
          onChange={(e) => setPassengerCount(e.target.value)}
        />
      </div>
      <button>Search Flights</button>
    </div>
  );
}

export default BookFlight;
