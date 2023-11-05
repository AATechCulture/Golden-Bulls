import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './styles/Bookflight.css';

function Bookflight() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedFlights = searchParams.get('selectedFlights');

  if (!selectedFlights) {
    return <div>No flight selected</div>;
  }

  // Split the selected flight numbers into an array
  const flightNumbers = selectedFlights ? selectedFlights.split(',') : [];

  const [flightDetails, setFlightDetails] = useState([]);

  useEffect(() => {
    // Function to fetch flight details based on flight number
    const fetchFlightDetails = async (flightNumber) => {
      try {
        const response = await fetch(`http://your-api-endpoint/flights/${flightNumber}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFlightDetails((prevDetails) => [...prevDetails, data]);
      } catch (error) {
        console.error(`Error fetching flight details for ${flightNumber}:`, error);
      }
    };

    if (flightNumbers.length > 0) {
      // Fetch flight details for each flight number
      flightNumbers.forEach((flightNumber) => {
        fetchFlightDetails(flightNumber);
      });
    }
  }, [flightNumbers]);

  return (
    <div className="book-flight">
      <h1>Selected Flight Details</h1>
      {flightNumbers.map((flightNumber, index) => (
        <table key={flightNumber}>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Distance</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr key={index}>
              <td>{flightNumber}</td>
              <td>{flightDetails[index]?.origin?.city || 'Loading...'}</td>
              <td>{flightDetails[index]?.destination?.city || 'Loading...'}</td>
              <td>{flightDetails[index]?.departureTime || 'Loading...'}</td>
              <td>{flightDetails[index]?.arrivalTime || 'Loading...'}</td>
              <td>{flightDetails[index]?.distance || 'Loading...'} miles</td>
              <td>{flightDetails[index]?.duration?.locale || 'Loading...'}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default Bookflight;
