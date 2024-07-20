import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../schemas/validationSchema.js";
import css from "./CallBackSection.module.css";
import Button from "../Button/Button.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TelegramLink from "../TelegramLink/TelegramLink.js";
import WhatsAppLink from "../WhatsAppLink/WhatsAppLink.jsx";
import ViberLink from "../ViberLink/ViberLink.jsx";

export function CallBackSection() {
  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Форма відправлена з секції в послугах", values);
    toast.success("Сообщение отправлено. Вам позвонит консультант.");
    resetForm();
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
              <div className={css.errorWrapper}>
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.error}
                />
              </div>
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
              <div className={css.errorWrapper}>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className={css.error}
                />
              </div>
            </div>
            <Button
              type="submit"
              text="Заказать звонок"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
      <p className={css.text}>
        либо задайте вопрос в удобном для Вас мессенджере:
      </p>
      <div className={css.social}>
        <div className={css.telegramLink}>
          <TelegramLink />
        </div>
        <div className={css.whatsAppLink}>
          <WhatsAppLink />
        </div>
        <divc className={css.viberLink}>
          <ViberLink />
        </divc>
      </div>
    </section>
  );
}
