"use client";

import styles from "./Reviews.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { REVIEWS } from "/src/consts/Reviews.js";
import { ReviewsCard } from "./ReviewsCard/ReviewsCard";

export const Reviews = ({ className }) => {
    if (!REVIEWS?.length) return null;

    return (
        <section className={className}>
            <div className="container">
                <h2 className="visuallyHidden">Отзывы</h2>

                <Swiper
                    className={styles.reviews__slider}
                    modules={[Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {REVIEWS.map(review => (
                        <SwiperSlide
                            className={styles.reviews__slide}
                            key={review.text}
                        >
                            <ReviewsCard
                                className={styles.reviews__card}
                                review={review}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
