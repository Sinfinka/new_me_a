import Head from "next/head";
import css from "./ContactsPage.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ContactsPage() {
  const { t } = useTranslation("common");
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK;
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM;
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER;

  return (
    <div className={css.container}>
      <Head>
        <title>{t("contacts_page_title")}</title>
        <meta name="description" content={t("contacts_page_description")} />
        {/* Змініть метатеги Open Graph і Twitter при необхідності */}
      </Head>

      <header className={css.header}>
        <h1 className={css.headerTitle}>{t("header_title")}</h1>
        <p className={css.headerDescription}>{t("header_description")}</p>
      </header>

      <section className={css.contactInfo}>
        <h2 className={css.contactInfoTitle}>{t("address_title")}</h2>
        <p>{t("address")}</p>

        <h2 className={css.contactInfoTitle}>{t("phone_title")}</h2>
        <p>
          {t("phone_text")}
          <a
            href={`tel:+${phone}`}
            className={css.phoneNumber}
          >{`+${phone}`}</a>
        </p>

        <h2 className={css.contactInfoTitle}>{t("email_title")}</h2>
        <p>
          <a href={`mailto:${email}`} className={css.email}>
            {email}
          </a>
        </p>
      </section>

      <section className={css.workingHours}>
        <h2 className={css.workingHoursTitle}>{t("working_hours_title")}</h2>
        <p>{t("working_hours_weekdays")}</p>
        <p>{t("working_hours_saturday")}</p>
        <p>{t("working_hours_sunday")}</p>
      </section>
      <section className={css.socialMedia}>
        <h2 className={css.socialMediaTitle}>{t("social_media_title")}</h2>
        <div className={css.socialLinks}>
          <a
            href={facebookUrl}
            className={css.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href={twitterUrl}
            className={css.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href={instagramUrl}
            className={css.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      <section className={css.location}>
        <h2 className={css.locationTitle}>{t("location_title")}</h2>
        <div className={css.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.3180249584148!2d30.7911353761324!3d36.85880587223054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39b51b4824c95%3A0xc6817b0165011963!2sLara%20Anatolia%20Private%20Hospital!5e0!3m2!1sru!2sua!4v1722548491412!5m2!1sru!2sua"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

      <section className={css.clinicPhoto}>
        <img
          src="/clinic_Lara.jpg"
          alt={t("clinic_photo_alt")}
          className={css.clinicPhotoImg}
        />
      </section>
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
