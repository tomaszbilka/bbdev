import { useLayoutEffect } from 'react';
import ContactForm from 'components/ContactForm';

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ContactForm />;
};

export default Contact;
