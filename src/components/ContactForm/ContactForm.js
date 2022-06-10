import validationSchema from 'utils/yup-schema';
import { useFormik } from 'formik';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: () => {
      formik.resetForm();
    },
  });

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
      <form className="form" onSubmit={formik.handleSubmit} data-netlify="true">
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
      </form>
    </div>
  );
};

export default ContactForm;
