import Head from "next/head";

export default function BariatricsPage() {
  return (
    <div>
      <Head>
        <title>Бариатрия - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Бариатрическая хирургия в NewMe Health Clinic помогает пациентам достигать здоровья через потерю веса. Узнайте больше о наших услугах и как мы можем помочь вам."
        />
        {/* ЗМІНИТИ Open Graph и Twitter */}
      </Head>
      <div>
        <h1>Бариатрия</h1>
        <p>
          Мы специализируемся на бариатрической хирургии, которая помогает
          пациентам достигать здоровья через потерю веса.
        </p>
      </div>
    </div>
  );
}
