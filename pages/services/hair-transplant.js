import Head from "next/head";

export default function HairTransplantPage() {
  return (
    <div>
      <Head>
        <title>Пересадка волос - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Пересадка волос в NewMe Health Clinic - современные технологии и процедуры для восстановления и улучшения волосистости."
        />
        {/* ЗМІНИТИ Open Graph и Twitter */}
      </Head>

      <div>
        <h1>Пересадка волос</h1>
        <p>
          В нашей клинике мы предлагаем передовые технологии и процедуры для
          пересадки волос, которые помогут вам восстановить и улучшить вашу
          волосистость.
        </p>
        {/* Дополнительные детали и описание процедур по пересадке волос */}
      </div>
    </div>
  );
}
