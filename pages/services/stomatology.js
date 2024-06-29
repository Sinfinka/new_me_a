import Head from "next/head";

export default function StomatologyPage() {
  return (
    <div>
      <Head>
        <title>Стоматология - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Стоматологические услуги в NewMe Health Clinic — широкий спектр профессиональных стоматологических процедур и лечения. Посетите нас, чтобы узнать больше."
        />
        {/* ЗМІНИТИ Open Graph и Twitter*/}
      </Head>
      <div>
        <h1>Стоматология</h1>
        <p>
          Наши стоматологи предлагают широкий спектр профессиональных
          стоматологических процедур и лечения.
        </p>
      </div>
    </div>
  );
}
