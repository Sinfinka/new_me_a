// pages/prices.js
import Head from "next/head";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import css from "./PricesPage.module.css";

export default function PricesPage() {
  return (
    <div>
      <Head>
        <title>Цены - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Ознакомьтесь с ценами на медицинские услуги в NewMe Health Clinic. Мы предлагаем прозрачные и конкурентоспособные тарифы для различных процедур."
        />
        {/* ЗМІНИТИ  метатеги Open Graph и Twitter  */}
      </Head>

      <PageMainSection additionalClass={css.pricesMain} header={"Цены"} />
      <h1>Цены</h1>
      <p>Здесь будет информация о ценах на наши медицинские услуги.</p>
    </div>
  );
}
