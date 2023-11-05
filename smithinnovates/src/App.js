import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './frontend/Home';
import Header from './frontend/Header';
import Login from './frontend/Login';
import Searchflight from './frontend/Searchflight';
import ChatBot from './frontend/Chatbot';
import SearchedResults from './frontend/SearchedResults';
import Bookflight from './frontend/Bookflight';
import ReminderHome from './frontend/ReminderHome';
import Profile from './frontend/Profile';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null); // Initialize as null or with your default value
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chatbot" element={<><Header /><ChatBot /></>} />
          <Route path="/profile" element={<><Header /><Profile /></>} />
          <Route path="/reminder" element={<><Header /><ReminderHome /></>} />
          <Route
            path="/search-results"
            element={<><Header /><SearchedResults /></>}
          />
          <Route
            path="/book-flight"
            element={
              <><Header /><Bookflight selectedFlight={selectedFlight} /></>
            }
          />
          <Route path="/search-flight" element={<><Header /><Searchflight /></>} />
          <Route path="/login" element={<><Header /><Login /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
