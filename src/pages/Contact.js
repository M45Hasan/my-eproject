import Container from "../components/layout/Container";
import React from "react";
import Breadcrum from "../components/layout/Breadcrum";
import InputBox from "../components/layout/InputBox";
import Button from "../components/layout/Button";

const Contact = () => {
  return (
    <div>
      <Container>
        <Breadcrum />

        <div className=" mt-28  w-2/4">
          <h2 className="mb-9 font-dm text-4xl font-bold">Fill up a Form</h2>
          <InputBox as="input" title="Name" placeholder="YOUR NAME" />
          <InputBox as="input" title="Email" placeholder="Your email here" />
          <InputBox
            as="textarea"
            title="Message"
            placeholder="Your message here"
          />

          <Button butName="Post" />
        </div>
        <div className="w-full">
          <iframe
            className="m-0 h-[500px] w-full "
            src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
