import Head from "next/head";

export default function VisionCorrection() {
  return (
    <div>
      <Head>
        <title>Коррекция зрения - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Узнайте о передовых технологиях и процедурах коррекции зрения в NewMe Health Clinic. Наши специалисты помогут улучшить ваше зрение."
        />
        {/* ЗМІНИТИ Open Graph и Twitter */}
      </Head>

      <div>
        <h1>Коррекция зрения</h1>
        <p>
          В нашей клинике мы предлагаем передовые технологии и процедуры для
          коррекции зрения, которые помогут вам улучшить качество жизни и
          комфортность повседневных занятий.
        </p>
      </div>
    </div>
  );
}
