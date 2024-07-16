import Head from "next/head";
import css from "./PromotionsPage.module.css";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";

export default function PromotionsPage() {
  return (
    <div>
      <Head>
        <title>Акции - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Узнайте о текущих акциях и специальных предложениях в NewMe Health Clinic. Получите выгодные условия на популярные медицинские процедуры."
        />
        {/* ЗМІНИТИ  метатеги Open Graph и Twitter  */}
      </Head>

      <PageMainSection additionalClass={css.promotionsMain} header={"Акции"} />
      <h1>Акции</h1>
      <p>Здесь будет информация о текущих акциях и специальных предложениях.</p>
    </div>
  );
}
