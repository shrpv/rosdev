"use client";
import classNames from "classnames";
import styles from "./ReviewsCard.module.scss";

export const ReviewsCard = ({ className, review }) => {
    return (
        <article className={classNames(className, styles.reviewsCard)}>
            <blockquote className={styles.reviewsCard__quote}>
                <p>{review.text}</p>
            </blockquote>

            <div className={styles.reviewsCard__author}>
                <img
                    className={styles.reviewsCard__image}
                    srcSet={review.author.srcSet}
                    src={review.author.src}
                    width="48"
                    height="48"
                    alt=""
                    loading="lazy"
                />

                <div className={styles.reviewsCard__info}>
                    <h3 className={styles.reviewsCard__name}>{review.author.name}</h3>

                    <p className={styles.reviewsCard__position}>{review.author.position}</p>
                </div>
            </div>
        </article>
    );
};
