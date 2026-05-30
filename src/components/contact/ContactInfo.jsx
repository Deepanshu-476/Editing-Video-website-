// src/components/contact/ContactInfo.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  const info = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Visit Us',
      details: ['123 Creative Street', 'Los Angeles, CA 90001']
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email Us',
      details: ['hello@editflow.com', 'support@editflow.com']
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Working Hours',
      details: ['Mon-Fri: 9am - 6pm', 'Sat-Sun: 10am - 4pm']
    }
  ];

  return (
    <div className="space-y-6">
      {info.map((item, index) => (
        <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
          <div className="gradient-text">{item.icon}</div>
          <div>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            {item.details.map((detail, i) => (
              <p key={i} className="text-slate-600">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
