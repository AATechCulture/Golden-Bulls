/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './styles/Searchflight.css';
import { useNavigate } from 'react-router-dom';

function SearchFlight() {
  const [tripType, setTripType] = useState('round-trip');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const navigate = useNavigate()

  // List of airports as options
  const airports = [
    'DFW',
    'PHL',
    'JFK',
    'LAX',
    // Add more airport codes as needed
  ];

  const handleClick = () => {
    navigate('/search-results')
  }

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
        <label>From (Airport Code):</label>
        <input
          type="text"
          placeholder="Enter airport code"
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
        />
        <label>To (Airport Code):</label>
        <input
          type="text"
          placeholder="Enter airport code"
          value={toLocation}
          onChange={(e) => setToLocation(e.target.value)}
        />
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
      <button onClick={handleClick}>Search Flights</button>
    </div>
  );
}

export default SearchFlight;