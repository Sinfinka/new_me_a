import React from "react";
import { prices } from "../../db/prices.js";
import css from "./PriceTable.module.css";

const PricesTable = ({ categories }) => {
  const renderTable = (category, title) => (
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
          {category.map((procedure, index) => (
            <tr key={index}>
              <td className={css.column}>{procedure.name}</td>
              <td className={css.column}>{procedure.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  return (
    <div className={css.container}>
      {categories.map((cat, index) => renderTable(prices[cat.key], cat.title))}
    </div>
  );
};

export default PricesTable;
