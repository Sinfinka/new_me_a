// import React, { useRef, useEffect, useCallback } from "react";
// import css from "./CallbackModal.module.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import PhoneInput from "react-phone-number-input";
// import Button from "../Button/Button";
// import { validationSchema } from "../../schemas/validationSchema";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Link from "next/link";

// const CallbackModal = ({ isOpen, onClose }) => {
//   const modalRef = useRef(null);
//   const backdropRef = useRef(null);

//   const handleBackdropClick = useCallback(
//     (e) => {
//       if (e.target === backdropRef.current && isOpen) {
//         onClose();
//       }
//     },
//     [isOpen, onClose]
//   );

//   useEffect(() => {
//     const backdrop = backdropRef.current;
//     if (isOpen && backdrop) {
//       backdrop.addEventListener("click", handleBackdropClick);
//     } else if (backdrop) {
//       backdrop.removeEventListener("click", handleBackdropClick);
//     }

//     return () => {
//       if (backdrop) {
//         backdrop.removeEventListener("click", handleBackdropClick);
//       }
//     };
//   }, [isOpen, handleBackdropClick]);

//   if (!isOpen) {
//     return null;
//   }

//   const initialValues = {
//     name: "",
//     phone: "",
//   };

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const jsonData = JSON.stringify(values);
//       console.log("Дані для відправки:", jsonData);

//       await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/sendEmail`,
//         jsonData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       toast.success("Ваши данные отправлены. С Вами свяжутся.");
//     } catch (error) {
//       console.error("Ошибка при отправке данных:", error);
//       toast.error("Ошибка при отправке данных. Попробуйте еще раз.");
//     } finally {
//       setSubmitting(false);
//       onClose();
//     }
//   };

//   return (
//     <>
//       <div ref={backdropRef} className={css.modalBackdrop}>
//         <div ref={modalRef} className={css.modal}>
//           <div className={css.modalHeader}>
//             <h5 className={css.modalTitle}>Обратный звонок</h5>
//             <button type="button" className={css.closeButton} onClick={onClose}>
//               &times;
//             </button>
//           </div>
//           <div className={css.modalBody}>
//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ isSubmitting, values }) => (
//                 <Form>
//                   <div className={css.formGroup}>
//                     <label className={css.label} htmlFor="name">
//                       Имя
//                     </label>
//                     <Field
//                       type="text"
//                       className={css.inputField}
//                       id="name"
//                       name="name"
//                       placeholder="Ваше имя"
//                       autoFocus
//                     />
//                     <ErrorMessage
//                       name="name"
//                       component="div"
//                       className={css.textDanger}
//                     />
//                   </div>
//                   <div className={css.formGroup}>
//                     <label className={css.label} htmlFor="phone">
//                       Телефон
//                     </label>
//                     <Field name="phone">
//                       {({ field, form }) => (
//                         <PhoneInput
//                           {...field}
//                           id="phone"
//                           name="phone"
//                           placeholder="Ваш телефон"
//                           className={css.customPhone}
//                           onChange={(value) =>
//                             form.setFieldValue("phone", value)
//                           }
//                         />
//                       )}
//                     </Field>
//                     <div className={css.phoneNumberDisplay}>
//                       <p>Проверте Ваш номер телефона: {values.phone}</p>
//                     </div>
//                     <ErrorMessage
//                       name="phone"
//                       component="div"
//                       className={css.textDanger}
//                     />
//                   </div>
//                   <div className={css.modalFooter}>
//                     <Button
//                       text="Позвоните мне"
//                       type="submit"
//                       disabled={isSubmitting}
//                     />
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//             <p className={css.text}>
//               Так же Вы можете сразу заполнить
//               <Link
//                 href="https://forms.gle/YKFY3KG8NFe3Skk5A"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {" "}
//                 <strong className={css.ank}> анкету </strong>
//               </Link>
//               , <br />
//               что позволит нашему специалисту предоставить Вам более подробную
//               консультацию.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CallbackModal;

import React, { useRef, useEffect, useCallback } from "react";
import css from "./CallbackModal.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from "react-phone-number-input";
import Button from "../Button/Button";
import { validationSchema } from "../../schemas/validationSchema";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const CallbackModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const { t } = useTranslation();

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === backdropRef.current && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (isOpen && backdrop) {
      backdrop.addEventListener("click", handleBackdropClick);
    } else if (backdrop) {
      backdrop.removeEventListener("click", handleBackdropClick);
    }

    return () => {
      if (backdrop) {
        backdrop.removeEventListener("click", handleBackdropClick);
      }
    };
  }, [isOpen, handleBackdropClick]);

  if (!isOpen) {
    return null;
  }

  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const jsonData = JSON.stringify(values);
      console.log("Дані для відправки:", jsonData);

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/sendEmail`,
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(t("callback_modal_submit_success"));
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      toast.error(t("callback_modal_submit_error"));
    } finally {
      setSubmitting(false);
      onClose();
    }
  };

  return (
    <>
      <div ref={backdropRef} className={css.modalBackdrop}>
        <div ref={modalRef} className={css.modal}>
          <div className={css.modalHeader}>
            <h5 className={css.modalTitle}>{t("callback_modal_title")}</h5>
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
                      {t("callback_modal_name_label")}
                    </label>
                    <Field
                      type="text"
                      className={css.inputField}
                      id="name"
                      name="name"
                      placeholder={t("callback_modal_name_placeholder")}
                      autoFocus
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className={css.textDanger}
                    />
                  </div>
                  <div className={css.formGroup}>
                    <label className={css.label} htmlFor="phone">
                      {t("callback_modal_phone_label")}
                    </label>
                    <Field name="phone">
                      {({ field, form }) => (
                        <PhoneInput
                          {...field}
                          id="phone"
                          name="phone"
                          placeholder={t("callback_modal_phone_placeholder")}
                          className={css.customPhone}
                          onChange={(value) =>
                            form.setFieldValue("phone", value)
                          }
                        />
                      )}
                    </Field>
                    <div className={css.phoneNumberDisplay}>
                      <p>
                        {t("callback_modal_phone_check")}, {values.phone}
                      </p>
                    </div>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className={css.textDanger}
                    />
                  </div>
                  <div className={css.modalFooter}>
                    <Button
                      text={t("callback_modal_submit_button")}
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </Form>
              )}
            </Formik>
            <p className={css.text}>
              {t("callback_modal_alternate_form")}
              <Link
                href="https://forms.gle/YKFY3KG8NFe3Skk5A"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <strong className={css.ank}>
                  {t("callback_modal_form_link_text")}
                </strong>
              </Link>
              , <br />
              {t("callback_modal_form_description")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallbackModal;
