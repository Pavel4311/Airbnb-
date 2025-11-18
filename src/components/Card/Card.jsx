import { useState } from "react";
import starIcon from "./star.svg";
import styles from "./style.module.scss";

const Card = ({ data }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isReservation, setIsReservation] = useState(false);
  const {
    location,
    desc,
    rating,
    price_per_night,
    dates_available,
    img,
    img2x,
  } = data;

  const handleCardClick = () => {
    setIsExpand(!isExpand);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsExpand(false);
  };

  const addLocalStorage = (e) => {
    e.preventDefault();

    const userData = localStorage.getItem("userData");
    setIsReservation(true);

    const reservation = {
      login: JSON.parse(userData).login,
      reservation: true,
    };
    localStorage.setItem("reservation", JSON.stringify(reservation));
    setIsReservation(false);
  };

  return (
    <>
      {/* Основная карточка */}
      <article className={styles.card} onClick={handleCardClick}>
        <img
          src={img}
          srcSet={`${img2x} 2x`}
          alt={location}
          className={styles.img}
        />

        <div className={styles.descWrapper}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>{location}</h3>
            <div className={styles.rating}>
              <img src={starIcon} alt="starIcon" />
              {rating}
            </div>
          </div>

          <p className={styles.desc}>{desc}</p>
          <p className={styles.date}>{dates_available}</p>

          <p className={styles.price}>
            <strong>${price_per_night}</strong> night
          </p>
        </div>
      </article>

      {/* Увеличенная версия карточки */}
      {isExpand && (
        <div className={styles.overlay} onClick={handleClose}>
          <div
            className={styles.expandedCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={handleClose}>
              ×
            </button>

            <img
              src={img}
              srcSet={`${img2x} 2x`}
              alt={location}
              className={styles.expandedImg}
            />

            <div className={styles.expandedContent}>
              <div className={styles.titleWrapper}>
                <h2 className={styles.expandedTitle}>{location}</h2>
                <div className={styles.rating}>
                  <img src={starIcon} alt="starIcon" />
                  {rating}
                </div>
              </div>

              <p className={styles.expandedDesc}>{desc}</p>

              {/* Дополнительная информация */}
              <div className={styles.additionalInfo}>
                <h4>Дополнительная информация:</h4>
                <p>
                  <strong>Доступные даты:</strong> {dates_available}
                </p>
                <p>
                  <strong>Цена за ночь:</strong> ${price_per_night}
                </p>
                <p>
                  <strong>Рейтинг:</strong> {rating}/5
                </p>
                <p>
                  <strong>Описание:</strong> {desc}
                </p>
              </div>

              <button className={styles.bookButton} onClick={addLocalStorage}>
                Забронировать сейчас
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
