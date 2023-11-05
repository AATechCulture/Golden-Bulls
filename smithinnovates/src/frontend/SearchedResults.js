import React, { useState, useEffect } from 'react';

function SearchedResults() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:4000/flights?date=2023-11-14'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setFlights(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching flight data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading flight data...</div>;
  }

  return (
    <div className="book-flight-page">
      <h1>Book a Flight</h1>
      <table>
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
          {flights.map((flight) => (
            <tr key={flight.flightNumber}>
              <td>{flight.flightNumber}</td>
              <td>{flight.origin.city} ({flight.origin.code})</td>
              <td>{flight.destination.city} ({flight.destination.code})</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
              <td>{flight.distance} miles</td>
              <td>{flight.duration.locale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchedResults;
