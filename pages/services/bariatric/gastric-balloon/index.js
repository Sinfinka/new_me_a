import Head from "next/head";

export default function GastricBallonPage() {
  return (
    <div>
      <Head>
        <title>Желудочный баллон</title>
        <meta name="description" content="Желудочный баллон" />
        {/* ЗМІНИТИ Open Graph и Twitter */}
      </Head>
      <div>
        <h1>Желудочный баллон</h1>
        <p>
          Мы специализируемся на бариатрической хирургии, которая помогает
          пациентам достигать здоровья через потерю веса.
        </p>
      </div>
    </div>
  );
}
