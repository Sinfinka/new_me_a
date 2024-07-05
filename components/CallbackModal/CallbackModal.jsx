import React, { useRef, useEffect } from "react";
import css from "./CallbackModal.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";
import Button from "../Button/Button";
import { validationSchema } from "./validationSchema";

const CallbackModal = ({ isOpen, onClose, onSubmit }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen && backdropRef.current) {
      backdropRef.current.addEventListener("click", handleBackdropClick);
    } else if (backdropRef.current) {
      backdropRef.current.removeEventListener("click", handleBackdropClick);
    }

    return () => {
      if (backdropRef.current) {
        backdropRef.current.removeEventListener("click", handleBackdropClick);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    const phoneNumber = values.phone;
    console.log(phoneNumber);

    onSubmit(values, { setSubmitting });
  };

  return (
    <div ref={backdropRef} className={css.modalBackdrop}>
      <div ref={modalRef} className={css.modal}>
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
            {({ isSubmitting, values }) => (
              <Form>
                <div className={css.formGroup}>
                  <label className={css.label} htmlFor="name">
                    Имя
                  </label>
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
                  <label className={css.label} htmlFor="phone">
                    Телефон
                  </label>
                  <Field name="phone">
                    {({ field, form }) => (
                      <PhoneInput
                        {...field}
                        id="phone"
                        name="phone"
                        placeholder="Ваш телефон"
                        className={css.customPhone}
                        onChange={(value) => form.setFieldValue("phone", value)}
                      />
                    )}
                  </Field>
                  <div className={css.phoneNumberDisplay}>
                    <p>Проверте Ваш номер телефона: {values.phone}</p>
                  </div>

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
