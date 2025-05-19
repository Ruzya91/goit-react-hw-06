import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too schort!")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too schort!")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => (
  <Formik
    initialValues={{ name: "", number: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onAddContact(values.name, values.number);
      resetForm();
    }}
    validateOnChange={true}
    validateOnBlur={true}
  >
    {({ errors, touched }) => (
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <Field name="name" type="text" className={styles.field} />
        {touched.name && errors.name && (
          <div className={styles.error}>{errors.name}</div>
        )}

        <label className={styles.label} htmlFor="number">
          Number
        </label>
        <Field
          name="number"
          type="tel"
          inputMode="tel"
          pattern="[0-9+()\\- ]{3,50}"
          className={styles.field}
          onKeyPress={(e) => {
            if (!/[0-9+()\- ]/.test(e.key)) e.preventDefault();
          }}
        />
        {touched.number && errors.number && (
          <div className={styles.error}>{errors.number}</div>
        )}

        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
