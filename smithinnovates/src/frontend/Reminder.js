/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

function Reminder({ flightTime }) {
  const [reminders, setReminders] = useState([]);

  const reminderTimes = [
    { text: "It's time to pack your bags!", minutesBefore: 120 },
    { text: "Time to head to the airport!", minutesBefore: 60 },
    { text: "Don't worry, traffic is looking good.", minutesBefore: 30 },
  ];

  useEffect(() => {
    const now = new Date();
    const reminderData = reminderTimes.map((reminder) => {
      const reminderTime = new Date(flightTime - reminder.minutesBefore * 60 * 1000);
      return { ...reminder, time: reminderTime };
    });

    // Filter out reminders that are in the past
    const activeReminders = reminderData.filter((reminder) => reminder.time > now);

    setReminders(activeReminders);

    // Set up timers for the active reminders
    activeReminders.forEach((reminder) => {
      const timer = setTimeout(() => {
        // Display the reminder to the user
        alert(reminder.text);

        // Remove the reminder from the list after displaying
        const updatedReminders = reminders.filter((r) => r !== reminder);
        setReminders(updatedReminders);
      }, reminder.time - now);

      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div>
      <h2>Flight Reminders</h2>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reminder;
