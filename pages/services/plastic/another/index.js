import Head from "next/head";
import css from "./AnotherServicesPage.module.css";
import { CallBackSection } from "../../../../components/CallBackSection/CallBackSection";
import { PageMainSection } from "../../../../components/PageMainSection/PageMainSection";
import Image from "next/image";
import TelegramLink from "../../../../components/TelegramLink/TelegramLink";
import WhatsAppLink from "../../../../components/WhatsAppLink/WhatsAppLink";
import ViberLink from "../../../../components/ViberLink/ViberLink";

export default function AnotherServicesPage() {
  return (
    <div>
      <PageMainSection
        additionalClass={css.articlesMain}
        header={"Другие услуги"}
      />
      <div className={css.container}>
        <h1 className={css.heading}>Другие услуги NewMe Health Clinic</h1>
        <p className={css.description}>
          Наша клиника предоставляет множество услуг. Если вы не нашли нужную
          услугу на сайте, не стесняйтесь задать вопросы в мессенджерах или
          заказать звонок, и наш консультант с удовольствием вам все расскажет.
          Мы предлагаем индивидуальный подход к каждому пациенту и готовы помочь
          вам найти наилучшее решение для вашего здоровья и красоты. В нашем
          арсенале есть передовые технологии и методы лечения, которые позволяют
          достичь высоких результатов. Обращаясь к нам, вы можете быть уверены в
          профессионализме наших специалистов и высоком качестве обслуживания.
          Ваше здоровье и комфорт - наш приоритет. Обращайтесь к нам и убедитесь
          в этом лично!
        </p>
        {/* <TelegramLink />
        <WhatsAppLink />
        <ViberLink /> */}

        <div className={css.imageWrapper}>
          <Image
            src={"/doctors.jpg"}
            alt={"doctors"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <CallBackSection />
    </div>
  );
}
