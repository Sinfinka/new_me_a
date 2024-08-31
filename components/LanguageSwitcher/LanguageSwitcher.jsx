import { useRouter } from "next/router";
import clsx from "clsx";
import css from "./LanguageSwitcher.module.css";

const LanguageSwitcher = ({ isInFooter }) => {
  const router = useRouter();
  const { locale, asPath } = router;

  const switchToLanguage = (lang) => {
    router.replace(asPath, asPath, { locale: lang });
    console.log("Switching to language:", lang); // Для проверки
  };

  return (
    <div className={clsx(css.languageSwitcher, { [css.inFooter]: isInFooter })}>
      <button
        className={clsx(css.languageButton, {
          [css.active]: locale === "ru",
        })}
        onClick={() => switchToLanguage("ru")}
      >
        Ru
      </button>
      <button
        className={clsx(css.languageButton, {
          [css.active]: locale === "en",
        })}
        onClick={() => switchToLanguage("en")}
      >
        En
      </button>
      <button
        className={clsx(css.languageButton, {
          [css.active]: locale === "ua",
        })}
        onClick={() => switchToLanguage("ua")}
      >
        Ua
      </button>
    </div>
  );
};

export default LanguageSwitcher;
