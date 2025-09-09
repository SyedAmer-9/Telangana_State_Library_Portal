import React from 'react';
import './NewsUpdates.css'; // The styles for this component

// We'll define our news data right here for simplicity.
const newsData = [
  {
    day: '10',
    month: 'AUG',
    title: 'Two-Child Norm for Panchayat Polls to be Scrapped',
    description: 'The government is preparing to remove the decades-old rule, allowing candidates with more than two children to contest in local body elections.'
  },
  {
    day: '09',
    month: 'AUG',
    title: 'New Initiatives Planned to Boost State Tourism',
    description: 'The Telangana Tourism Policy 2025-2030 aims to attract new investments and promote heritage, cultural, and eco-tourism.'
  },
  {
    day: '08',
    month: 'AUG',
    title: 'GST Scrutiny to be Intensified on Businesses',
    description: 'Following the discovery of ITC scams, the commercial taxes department will tighten checks on all GST-registered businesses.'
  },
  {
    day: '07',
    month: 'AUG',
    title: 'Central Aid Sought for New Industrial Parks',
    description: 'The state has urged the Union government to extend financial aid for developing new MSME parks across several constituencies.'
  },
];

// This is a small, reusable component for a single news item.
function UpdateItem({ day, month, title, description }) {
  return (
    <div className="update-item-card">
      <div className="update-date">
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </div>
      <div className="update-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


function NewsUpdates() {
  return (
    <section className="news-section">
      <div className="news-title-container">
        <h2>Latest News & Updates</h2>
        <p>Stay informed with the latest announcements and initiatives.</p>
      </div>
      <div className="updates-grid">
        {newsData.map((item, index) => (
          <UpdateItem
            key={index}
            day={item.day}
            month={item.month}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsUpdates;