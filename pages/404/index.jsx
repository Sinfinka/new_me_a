import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import css from "./404.module.css";
import Image from "next/image";

const NotFoundPage = () => {
  const [counter, setCounter] = useState(15);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    if (counter === 0) {
      router.push("/");
    }

    return () => clearInterval(timer);
  }, [counter, router]);

  const handleButtonClick = () => {
    router.push("/");
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Видимо что-то пошло не так...</h1>
      <div className={css.imageContainer}>
        <Image
          width={1000}
          height={987}
          src="/doctor_set.png"
          alt="Medical 404"
          className={css.image}
        />
      </div>
      <p className={css.message}>
        Страница не найдена либо была удалена. Но не волнуйтесь, сейчас мы
        вернем вас на главную:
      </p>
      <p className={css.timer}>Переходим через {counter} сек...</p>
      <p className={css.text}>Не хотите ждать? Нажмите тут, что бы перейти</p>
      <button className={css.button} onClick={handleButtonClick}>
        НА ГЛАВНУЮ
      </button>
    </div>
  );
};

export default NotFoundPage;
