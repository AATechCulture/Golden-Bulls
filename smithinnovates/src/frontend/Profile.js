/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../backend/firebase';
import './styles/Profile.css'; 

function Profile() {
  const [userInfoData, setUserInfoData] = useState({});
  const [displayName, setDisplayName] = useState('');
  const user = auth.currentUser;

  useEffect(() => {
    const userRef = collection(db, `users/${user?.uid}/info`);
    onSnapshot(userRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        setUserInfoData(doc.data());
        setDisplayName(doc.data().firstName + ' ' + doc.data().lastName);
      });
    });
  }, []);

  return (
    <div className="profile-container">
      <h1>Welcome, {displayName}</h1>
      <div className="user-info">
        <h2>Your Profile Information</h2>
        <p>
          <strong>First Name:</strong> {userInfoData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {userInfoData.lastName}
        </p>
        <p>
          <strong>Country:</strong> {userInfoData.country}
        </p>
        <p>
          <strong>Username:</strong> {userInfoData.username}
        </p>
        <p>
          <strong>Email:</strong> {userInfoData.email}
        </p>
        <p>
          <strong>State:</strong> {userInfoData.state}
        </p>
        <p>
          <strong>AAdvantage Miles:</strong> {userInfoData.AAdvantageMiles}
        </p>
      </div>
    </div>
  );
}

export default Profile;
