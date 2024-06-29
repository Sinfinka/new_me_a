// pages/contacts.js
import Head from "next/head";

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>Контакты - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Контактная информация и способы связи с клиникой NewMe Health Clinic."
        />
        {/* ЗМІНИТИ  метатеги Open Graph и Twitter  */}
      </Head>
      <h1>Контакты</h1>
      <p>Здесь будет контактная информация вашей клиники.</p>
    </div>
  );
}
