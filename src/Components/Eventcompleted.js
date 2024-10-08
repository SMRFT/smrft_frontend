import React from 'react';
import './EventsCompleted.css'; // Optional if you want to include CSS separately
const events = [
  { date: '25-01-2023', description: 'Milk Diary Visit' },
  { date: '26-01-2023', description: 'No description available' },
  { date: '19-02-2023 to 22-02-2023', description: 'Alathupura Kedu Meetpu Visai (YRC)' },
  { date: '01-02-2023', description: 'Awareness on Mental Health (Academic)' },
  { date: '02-02-2023', description: 'World Cancer Awareness Week (Academic)' },
  { date: '18-03-2023', description: 'Awareness on Letting Go for Women’s Day (Venue: IMS Hall)' },
  { date: '08-03-2023', description: 'International Women’s Day Celebration - Awareness on Cervical Cancer Prevention & Speech Competition' },
  { date: '05-04-2023', description: 'Dengue Awareness Campaign at Kamarasampettai (NSS)' }
];
const EventsCompleted = () => {
  return (
    <div>
      <h1>Completed Events 2023</h1>
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <div className="date">{event.date}</div>
            <div className="description">{event.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EventsCompleted;