// src/pages/Contact.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageBanner from '../components/layout/PageBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import SocialLinks from '../components/contact/SocialLinks';
import WhatsAppButton from '../components/common/WhatsAppButton';

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageBanner 
        title="Get In Touch"
        subtitle="Let's discuss your project and create something amazing together"
      />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <ContactForm />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <ContactInfo />
              <div className="mt-8 pt-8 border-t border-slate-200">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
