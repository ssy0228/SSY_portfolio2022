import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

import "../styles/pages/contact.scss";

const Contact = () => {
  const { t } = useTranslation('translation');
  const form = useRef();
  const sendEmail = (e) => { 
    e.preventDefault();
    emailjs.sendForm('service_o3t2d3w', 'template_dnw18lh', form.current, 'kphMJBi_3SmRLn9AC')
    .then((response) => {
        alert('Great! Sending is success!🥰')
    }, (error) => { 
        alert('OMG! Sending got error!😢')
    } );
  }

  return (
    <section id="contact" className="container" name="contact">
      <h2 className="bold en">Contact</h2>
      <div className="contact_box">
        <div className="sendmail_form">
          <form ref={form} onSubmit={sendEmail}>
            <fieldset>
              <legend className="blind">Send Mail</legend>
              <label htmlFor="name" className="blind" >Name</label>
              <input type="text" name="from_name" id="from_name" placeholder="Your name" required/>
              <label htmlFor="e-mail" className="blind">
                E-mail Address
              </label>
              <input type="email" name="mailaddr" id="e-mail" placeholder="Your address ( example@abc.com )" required/>
              <label htmlFor="message" className="blind">
                Message
              </label>
              <textarea id="message" name="message" cols="30" rows="10" placeholder="Message" required></textarea>
              <div className="btns">
                <input id="reset" type="reset" value="Reset" />
                <input id="submit" type="submit" value="Send" />
              </div>
            </fieldset>
          </form>
        </div>
        <div className="final_greet">
          <div className="thanks">
            <span className="thanks_greets en">Thanks for your watching.</span>
            <p className="final_thanks ">
              {t('thanksto')}{t('thanksto1')}
            </p>
          </div>
          <div className="link_set">
            <a href="mailto:alchemist0228@gmail.com">
              <span className="ico">
                <img src={process.env.PUBLIC_URL + "/assets/svgs/email-svgrepo-com.svg"} alt="Another_mail" />
              </span>
              <span className="label">another e-mail</span>
            </a>
            <a href="https://github.com/ssy0228" target="_blank" rel="noopner noreferrer">
              <span className="ico">
                <img src={process.env.PUBLIC_URL + "/assets/svgs/icons8-github-48.svg"} alt="github-logo" />
              </span>
              <span className="label">Github</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
