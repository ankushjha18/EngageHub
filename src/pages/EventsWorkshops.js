import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import './Events.css';
import './Workshops.css';

const EventsWorkshops = () => {
  const [pastRef, pastInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // If you have upcoming event data, you can store it. For now, we assume none.
  const upcomingEvent = null;

  // Example past events — replace with your actual data
  const pastEvents = [
    {
      title: 'Boost your college profile with Research',
      date: 'September 20, 2025',
      time: '4:00 PM',
      location: 'Online',
      poster: '/eventbanner.jpg',
      attendees: '',
    },
    {
      title: 'How to make your college application work',
      date: '',
      time: '',
      location: 'Online',
      poster: '/eventbanner2.jpg',
      attendees: '',
    },
    {
      title: 'Demystifying Study Abroad after 12th',
      date: 'January 25, 2025',
      time: '4:00 PM',
      location: 'Online',
      poster: '/eventbanner3.jpg',
      attendees: '',
    },
    {
      title: 'How to make your college application work',
      date: 'July 21, 2025',
      time: '4:00 PM',
      location: 'Online',
      poster: '/eventbanner4.jpg',
      attendees: '',
    },
    {
      title: 'Demystifying Study Abroad after 12th',
      date: 'June 29, 2025',
      time: '6:30 PM',
      location: 'Online',
      poster: '/eventbanner5.jpg',
      attendees: '',
    },
    {
      title: 'Demystifying Study Abroad after 12th',
      date: 'July 14, 2025',
      time: '2:00 PM',
      location: 'Online',
      poster: '/eventbanner6.jpg',
      attendees: '',
    },
  ];

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero section">
        <div className="container">
          <motion.div
            className="events-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Events & Workshops</h1>
            <p className="section-subtitle">
              Join us for educational events, workshops, and seminars designed to enhance your learning journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Event / No Upcoming */}
      <section className="upcoming-event section">
        <div className="container">
          {upcomingEvent ? (
            // If you want to display an upcoming event, keep structure
            <motion.div
              className="event-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* your event card JSX here */}
            </motion.div>
          ) : (
            <motion.div
              className="no-upcoming"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">No Upcoming Events</h2>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="past-events section" ref={pastRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={pastInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Past Events</h2>
          </motion.div>

          <div className="past-events-grid">
            {pastEvents.map((evt, idx) => (
              <motion.div
                key={idx}
                className="past-event-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={pastInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="poster-wrapper">
                  <img src={evt.poster} alt={evt.title} className="poster-img" />
                </div>
                <div className="past-event-content">
                  <h3 className="event-title">{evt.title}</h3>
                  <div className="event-details">
                    <div className="event-info">
                      <FaCalendarAlt /> <span>{evt.date}</span>
                    </div>
                    <div className="event-info">
                      <FaClock /> <span>{evt.time}</span>
                    </div>
                    <div className="event-info">
                      <FaMapMarkerAlt /> <span>{evt.location}</span>
                    </div>
                    <div className="event-info">
                      <FaUsers /> <span>{evt.attendees}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive updates about upcoming events and educational opportunities.</p>
            <a href="/newsletter" className="btn btn-primary">Subscribe</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsWorkshops;
