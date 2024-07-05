import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Обязательно для заполнения")
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(30, "Имя должно содержать максимум 30 символов"),
  //   phone: Yup.string()
  //     .required("Обязательно для заполнения")
  //     .matches(
  //       /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
  //       "Неверный формат номера телефона"
  //     ),
});
