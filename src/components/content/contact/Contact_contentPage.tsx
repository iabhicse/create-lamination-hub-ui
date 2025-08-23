import React from "react";
import { envGoogleConfig } from "@/libs/env/env.google";
import ContactCard from "@/components/ui/wrappers/ContactCard";
import { envPersonalInfoConfig } from "@/libs/env/env.personal";
import ContactForm from "@/components/context/contact/ContactForm";
import GoogleMapIframe from "@/components/context/contact/GoogleMapIframe";

//personal information for contact page
const Contact_contentPage = () => {
  return (
    <>
      <ContactCard
        details={{
          title: "Get in Touch",
          number: envPersonalInfoConfig.PERSONAL_MOBILE,
          email: envPersonalInfoConfig.PERSONAL_EMAIL,
        }}
      >
        <ContactForm />
      </ContactCard>
      {envGoogleConfig.GOOGLE_MAP_LOCATION.length > 0 ? (
        <GoogleMapIframe embedUrl={envGoogleConfig.GOOGLE_MAP_LOCATION} />
      ) : null}
    </>
  );
};

export default Contact_contentPage;
