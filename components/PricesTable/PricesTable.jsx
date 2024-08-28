import React from "react";
import css from "./PricesTable.module.css";

const PricesTable = ({ categories, prices }) => {
  console.log("prices", prices);

  const renderTable = (category, title) => {
    console.log(category);

    if (!category || category.length === 0) {
      return null; // Не рендеримо таблицю, якщо дані відсутні
    }

    return (
      <>
        <h2 className={css.header}>{title}</h2>
        <table className={css.table}>
          <thead>
            <tr>
              <th className={css.column}>Процедура</th>
              <th className={css.column}>Цена</th>
            </tr>
          </thead>
          <tbody>
            {category.services.map((procedure, index) => (
              <tr key={index}>
                <td className={css.column}>{procedure.name}</td>
                <td className={css.column}>{procedure.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div className={css.container}>
      {categories.map((cat, index) => {
        const category = prices.find((price) => price.title === cat.key);
        return renderTable(category, cat.title);
      })}
    </div>
  );
};

export default PricesTable;
