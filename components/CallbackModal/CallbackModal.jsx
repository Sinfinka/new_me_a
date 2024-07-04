import React, { useEffect } from "react";
import css from "./CallbackModal.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";

const CallbackModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) {
    return null;
  }

  const initialValues = {
    name: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Обязательно для заполнения"),
    phone: Yup.string().required("Обязательно для заполнения"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values, { setSubmitting });
  };

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modal}>
        <div className={css.modalHeader}>
          <h5 className={css.modalTitle}>Обратный звонок</h5>
          <button type="button" className={css.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={css.modalBody}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className={css.formGroup}>
                  <label htmlFor="name">Имя</label>
                  <Field
                    type="text"
                    className={css.inputField}
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.textDanger}
                  />
                </div>
                <div className={css.formGroup}>
                  <label htmlFor="phone">Телефон</label>
                  <Field
                    type="tel"
                    className={css.inputField}
                    id="phone"
                    name="phone"
                    placeholder="Ваш телефон"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={css.textDanger}
                  />
                </div>
                <div className={css.modalFooter}>
                  <Button
                    text="Позвоните мне"
                    type={"submit"}
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CallbackModal;
