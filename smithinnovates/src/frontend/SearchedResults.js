import React, { useState, useEffect } from 'react';

function SearchedResults() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFlights, setSelectedFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/flights?date=2023-11-14');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Limit the number of results to 10
        const limitedFlights = data.slice(0, 10);
        setFlights(limitedFlights);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching flight data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFlightSelection = (flightNumber) => {
    // Check if the flight is already selected, and toggle its selection.
    const isFlightSelected = selectedFlights.includes(flightNumber);
    if (isFlightSelected) {
      setSelectedFlights(selectedFlights.filter((number) => number !== flightNumber));
    } else {
      setSelectedFlights([...selectedFlights, flightNumber]);
    }
  };

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
            <th>Select</th> {/* Add a Select column */}
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
              <td>
                <input
                  type="checkbox"
                  checked={selectedFlights.includes(flight.flightNumber)}
                  onChange={() => handleFlightSelection(flight.flightNumber)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Selected Flights</h2>
        <ul>
          {selectedFlights.map((flightNumber) => (
            <li key={flightNumber}>{flightNumber}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchedResults;
