import { useState, useEffect } from 'react';
import validationSchema from 'utils/yup-schema';
import { useFormik } from 'formik';

const ContactForm = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  useEffect(() => {
    setIsNotificationVisible(true);
    const timer = setTimeout(() => {
      setIsNotificationVisible(false);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [formMessage]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formik.values }),
    })
      .then(() => {
        setFormMessage('Your message was sent!');
      })
      .catch(() => {
        setFormMessage('There is some problem with server! Try again later!');
      });
    formik.resetForm();
  };

  const messageStyle =
    formMessage === 'Your message was sent!'
      ? 'notification'
      : 'notification -error';

  return (
    <div className="contact-container">
      <div className="contact">
        <p className="contact__text">
          If you have a project you would like to discuss or if you would like
          to ask about something, please write to:
        </p>
        <p className="contact__mail">bbdevpl@gmail.com</p>
        <p className="contact__text">or send message by form below</p>
      </div>
      <form
        className="form"
        onSubmit={submitHandler}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="form__error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="form__error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form__input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="form__error">{formik.errors.subject}</div>
          ) : null}
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="form__input -textarea"
            rows="5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="form__error">{formik.errors.message}</div>
          ) : null}
        </div>
        <button className="form__button" type="submit">
          Send
        </button>
        <div className={messageStyle}>
          {isNotificationVisible && <p>{formMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
