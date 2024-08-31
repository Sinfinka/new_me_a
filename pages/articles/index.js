import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import css from "./ArticlesPage.module.css";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ArticlesPage() {
  const { t } = useTranslation("common");
  const breadcrumbs = [
    { label: t("home"), href: "/" },
    { label: t("articles") },
  ];

  return (
    <div>
      <Head>
        <title>{t("articles_title")} - NewMe Health Clinic</title>
        <meta name="description" content={t("description")} />
        {/* Update Open Graph and Twitter meta tags */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection
        additionalClass={css.articlesMain}
        header={t("articles")}
      />
      <div className={css.articlesContent}>
        <div className={css.upcomingArticles}>
          <h2>{t("soon_message")}</h2>

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
              alt={t("soon_message")}
              width={260}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

// import { useTranslation } from "next-i18next";
// import Head from "next/head";
// import Link from "next/link";
// import css from "./ArticlesPage.module.css";
// import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
// import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
// import Image from "next/image";

// export default function ArticlesPage() {
//   const { t } = useTranslation("common");
//   const breadcrumbs = [
//     { label: t("home"), href: "/" },
//     { label: t("articles") },
//   ];

//   return (
//     <div>
//       <Head>
//         <title>{t("articles")} - NewMe Health Clinic</title>
//         <meta name="description" content={t("description")} />
//       </Head>
//       <BreadcrumbsComponent paths={breadcrumbs} />
//       <PageMainSection
//         additionalClass={css.articlesMain}
//         header={t("articles")}
//       />
//       <div className={css.articlesContent}>
//         <div className={css.upcomingArticles}>
//           <h2>{t("soon_message")}</h2>
//           <p>{t("update_message")}</p>
//           <p>
//             {t("visit_services")}{" "}
//             <Link href="/services" passHref>
//               {t("services_link")}
//             </Link>
//           </p>
//           <div className={css.imagePlaceholder}>
//             <Image
//               className={css.image}
//               src="/soon.jpg"
//               alt={t("soon_message")}
//               width={260}
//               height={460}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
