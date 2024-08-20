import { useRouter } from "next/router";
import clsx from "clsx";
import css from "./LanguageSwitcher.module.css";

const LanguageSwitcher = ({ isInFooter }) => {
  const router = useRouter();
  //   const pathname = router.pathname;

  const switchToEnglish = () => {
    console.log("english click");
    //   router.push(pathname, pathname, { locale: "en" });
  };

  const switchToRussian = () => {
    console.log("russ click");
    //   router.push(pathname, pathname, { locale: "ru" });
  };

  const switchToUkrainian = () => {
    console.log("ua click");
    //   router.push(pathname, pathname, { locale: "ru" });
  };

  return (
    <div className={clsx(css.languageSwitcher, { [css.inFooter]: isInFooter })}>
      <button
        className={clsx(css.languageButton, {
          [css.active]: router.locale === "ru",
        })}
        onClick={switchToRussian}
      >
        Ru
      </button>
      <button
        className={clsx(css.languageButton, {
          [css.active]: router.locale === "en",
        })}
        onClick={switchToEnglish}
      >
        En
      </button>
      <button
        className={clsx(css.languageButton, {
          [css.active]: router.locale === "ua",
        })}
        onClick={switchToUkrainian}
      >
        Ua
      </button>
    </div>
  );
};

export default LanguageSwitcher;
