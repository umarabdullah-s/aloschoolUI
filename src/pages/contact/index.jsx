import React, { Fragment } from "react";
import Head from "next/head";
import ContactUs from "@/sections/contactSection/ContactUs";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Home - Boiler Code</title>
        {/* enter seo here */}
      </Head>
      <ContactUs/>
    </Fragment>
  );
};

export default Contact;