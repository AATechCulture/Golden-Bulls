import React, { useState } from 'react';
import './styles/ReminderHome.css';

function ReminderHome() {
  const [reminders, setReminders] = useState([
    { text: "It's time to pack your bags!", completed: false },
    { text: "Time to head to the airport!", completed: false },
    { text: "Don't worry, traffic is looking good.", completed: false },
  ]);
  const [newReminder, setNewReminder] = useState('');

  const addReminder = () => {
    if (newReminder.trim() !== '') {
      setReminders([...reminders, { text: newReminder, completed: false }]);
      setNewReminder('');
    }
  };

  const toggleReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders[index].completed = !updatedReminders[index].completed;
    setReminders(updatedReminders);
  };

  return (
    <div className="reminder-home">
      <h1>Reminders</h1>

      <div className="reminders-list">
        {reminders.map((reminder, index) => (
          <div key={index} className={`reminder-item ${reminder.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={reminder.completed}
              onChange={() => toggleReminder(index)}
            />
            <span>{reminder.text}</span>
          </div>
        ))}
      </div>

      <div className="add-reminder">
        <input
          type="text"
          placeholder="Add a new reminder"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
        />
        <button onClick={addReminder}>+</button>
      </div>
    </div>
  );
}

export default ReminderHome;
