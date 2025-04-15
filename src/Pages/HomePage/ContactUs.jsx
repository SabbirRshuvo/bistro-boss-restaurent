import React from "react";
import ContactBanner from "../../ContactComponent/ContactBanner";
import ContactAdress from "../../ContactComponent/ContactAdress";
import ContactForm from "../../ContactComponent/ContactForm";
const ContactUs = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <ContactBanner />
      </div>
      <div className="max-w-5xl mx-auto">
        <ContactAdress />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
