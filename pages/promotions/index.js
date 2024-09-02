// import Head from "next/head";
// import Link from "next/link";
// import css from "./PromotionsPage.module.css";
// import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
// import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
// import Image from "next/image";

// export default function PromotionsPage() {
//   const breadcrumbs = [{ label: "Главная", href: "/" }, { label: "Цены " }];
//   return (
//     <div>
//       <Head>
//         <title>Акции - NewMe Health Clinic</title>
//         <meta
//           name="description"
//           content="Узнайте о текущих акциях и специальных предложениях в NewMe Health Clinic. Получите выгодные условия на популярные медицинские процедуры."
//         />
//         {/* ЗМІНИТИ метатеги Open Graph и Twitter */}
//       </Head>
//       <BreadcrumbsComponent paths={breadcrumbs} />
//       <PageMainSection additionalClass={css.promotionsMain} header={"Акции"} />
//       <div className={css.promotionsContent}>
//         <div className={css.upcomingPromotions}>
//           <h2>Скоро здесь появятся актуальные акции и скидки!</h2>
//           <p>
//             Мы готовим для вас лучшие предложения на популярные медицинские
//             процедуры. Следите за обновлениями!
//           </p>
//           <p>
//             Пока вы ждете, посетите наш раздел{" "}
//             <Link href="/services" passHref>
//               услуг
//             </Link>
//             , чтобы узнать больше о наших предложениях.
//           </p>
//           <div className={css.imagePlaceholder}>
//             <Image
//               className={css.image}
//               src="/soon.jpg"
//               alt="Скоро здесь появятся акции"
//               width={260}
//               height={460}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import css from "./PromotionsPage.module.css";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function PromotionsPage() {
  const { t } = useTranslation("common");

  const breadcrumbs = [
    { label: t("home"), href: "/" },
    { label: t("promotions_title") },
  ];

  return (
    <div>
      <Head>
        <title>{t("promotions_title")} - NewMe Health Clinic</title>
        <meta name="description" content={t("promotions_description")} />
        {/* ЗМІНИТИ метатеги Open Graph і Twitter */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection
        additionalClass={css.promotionsMain}
        header={t("promotions_title")}
      />
      <div className={css.promotionsContent}>
        <div className={css.upcomingPromotions}>
          <h2>{t("soon_message")}</h2>
          <p>{t("wait_message")}</p>
          <p>
            {t("wait_message")}
            <Link href="/services" passHref>
              {t("services_link")}{" "}
            </Link>
            {t("update_message")}{" "}
          </p>
          <div className={css.imagePlaceholder}>
            <Image
              className={css.image}
              src="/soon.jpg"
              alt={t("soon_image_alt")}
              width={260}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
