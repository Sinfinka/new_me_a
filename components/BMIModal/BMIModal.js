import React, { useState } from "react";
import ReactModal from "react-modal";
import css from "./BMIModal.module.css";

ReactModal.setAppElement("#__next");

const BMIModal = ({ isOpen, onRequestClose }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  const handleRequestClose = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    onRequestClose();
  };

  return (
    <ReactModal
      className={css.modalContent}
      isOpen={isOpen}
      onRequestClose={handleRequestClose}
      contentLabel="BMI Calculator"
    >
      <h2 className={css.modalHeader}>Рассчет Индекса Массы Тела</h2>
      <form>
        <div>
          <label className={css.modalLabel}>
            Масса тела (кг):
            <input
              className={css.modalInput}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className={css.modalLabel}>
            Рост (см):
            <input
              className={css.modalInput}
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <button
          className={css.modalButton}
          type="button"
          onClick={calculateBMI}
        >
          Рассчитать
        </button>
      </form>
      {bmi && (
        <div>
          <h3 className={css.modalResult}>Ваш ИМТ: {bmi}</h3>
        </div>
      )}
      <button className={css.modalButton} onClick={handleRequestClose}>
        Закрить
      </button>
    </ReactModal>
  );
};

export default BMIModal;
