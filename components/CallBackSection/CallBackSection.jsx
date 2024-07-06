import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../schemas/validationSchema.js";
import css from "./CallBackSection.module.css";
import Button from "../Button/Button.jsx";

export function CallBackSection() {
  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Форма відправлена з секції", values);
    setSubmitting(false);
  };

  return (
    <section className={css.callbackSection}>
      <h2 className={css.header}>Консультация специалиста по телефону</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="name" className={css.label}>
                Имя
              </label>
              <Field
                type="text"
                name="name"
                className={css.input}
                placeholder="Ваше имя"
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.formGroup}>
              <label htmlFor="phone" className={css.label}>
                Телефон
              </label>
              <Field
                type="text"
                name="phone"
                className={css.input}
                placeholder="Ваш телефон"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={css.error}
              />
            </div>
            <Button
              type="submit"
              text="Заказать звонок"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </section>
  );
}
