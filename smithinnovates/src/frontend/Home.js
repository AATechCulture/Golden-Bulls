import React from 'react';
import './styles/Home.css'; // Import your custom CSS for styling
import { updateMilesInFirestore } from './milesUtils';

function Home() {
  const handleClick = (e) => {
    const miles = 10; // You can adjust the number of miles to reward
    

    // Call the function to update miles in Firestore
    updateMilesInFirestore(miles);
  }
  return (
    <div className="home-main">
      <div className="heading">
      <h1 className="welcome-text">Welcome to Jet-Fly-Go</h1>
      </div>

      <div className="content-container">
        <div className="left-content">
          <h2>About Jet-Fly-Go</h2>
          <p>
            Jet-Fly-Go is a revolutionary travel companion designed to transform your flying experience into a hassle-free journey. Our team, a passionate group of innovators, has created Jet-Fly-Go to make flying with ease and comfort a reality. We harness the power of technology and AI, leveraging cutting edge technology and data analysis, to provide you with personalized travel assistance that adapts to your needs.
          </p>
        </div>

        <div className="right-content">
          <img src="/media/logo.png" alt="Welcome" />
        </div>
      </div>

      <div className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Real-Time Notifications</h3>
          <img src="/media/realtime.jpg" alt="Notifications" />
          <p>Stay informed with personalized real-time notifications throughout your journey. From online check-in to gate changes, we've got you covered.</p>
        </div>
        <div className="service-card">
          <h3>Weather and Traffic Updates</h3>
          <img src="/media/weather.png" alt="Weather and Traffic" />
          <p>Plan your trip with confidence using our weather and traffic alerts, ensuring you reach the airport on time and without surprises.</p>
        </div>
        <div className="service-card">
          <h3>Airport Maps and Flight Status</h3>
          <img src="/media/flightstatus.jpg" alt="Airport Maps and Flight Status" />
          <p>Navigate airports effortlessly with our interactive maps. Stay up to date with flight status, delays, and gate information.</p>
        </div>
      </div>

      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          For inquiries or assistance, please feel free to contact us at{' '}
          <a href="mailto:contact@jetflygo.com">contact@jetflygo.com</a>. Your feedback and questions are important to us, and we're here to ensure your travel experience is enjoyable and stress-free.
        </p>
        <button onClick={handleClick}>Gain Point</button>
      </div>
    </div>
  );
}

export default Home;
