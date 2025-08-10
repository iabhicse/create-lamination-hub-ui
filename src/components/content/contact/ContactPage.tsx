import React from "react";
import ContactCard from "@/components/ui/wrappers/ContactCard";
import ContactForm from "@/components/context/contact/ContactForm";
import GoogleMapIframe from "@/components/context/contact/GoogleMapIframe";

//personal information for contact page
import { envGoogleClient, envPersonalInfo } from "@/libs/configs/config.env";

const ContactPage = () => {
  return (
    <>
      <ContactCard
        details={{
          title: "Get in Touch",
          number: envPersonalInfo.PERSONAL_MOBILE,
          email: envPersonalInfo.PERSONAL_EMAIL,
        }}
      >
        <ContactForm />
      </ContactCard>
      <GoogleMapIframe embedUrl={envGoogleClient.GOOGLE_MAP_LOCATION} />
    </>
  );
};

export default ContactPage;
