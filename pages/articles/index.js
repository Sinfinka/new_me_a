import Head from "next/head";
import css from "./ArticlesPage.module.css";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";

export default function ArticlesPage() {
  return (
    <div>
      <Head>
        <title>Статьи - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Читайте полезные статьи и новости о медицине, здоровье и красоте на странице статей NewMe Health Clinic."
        />
        {/* ЗМІНИТИ  метатеги Open Graph и Twitter  */}
      </Head>

      <PageMainSection additionalClass={css.articlesMain} header={"Статьи"} />
      <h1>Статьи</h1>
      <p>
        Здесь будет список полезных статей и новостей о медицине и здоровье.
      </p>
    </div>
  );
}
