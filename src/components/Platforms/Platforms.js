import classNames from "classnames";
import styles from "./Platforms.module.scss";

export const Platforms = ({ className }) => {
    return (
        <section className={className}>
            <div className="container">
                <h2 className="visuallyHidden">Наши платформы</h2>

                <div className={styles.platforms__banner}>
                    <div className={styles.platforms__content}>
                        <p className={classNames(styles.platforms__title, "title")}>
                            Передовые платформы для <em className="gradientText">вашего бизнеса</em>
                        </p>

                        <p className={styles.platforms__description}>
                            Мы разрабатываем, создаем и масштабируем передовые платформы, которые станут основой вашего
                            следующего прорыва.
                        </p>
                    </div>

                    <picture>
                        <source
                            srcSet="/img/platforms/image.avif 1x, /img/platforms/image@2x.avif 2x"
                            type="image/avif"
                        />

                        <source
                            srcSet="/img/platforms/image.webp 1x, /img/platforms/image@2x.webp 2x"
                            type="image/webp"
                        />

                        <img
                            className={styles.platforms__image}
                            srcSet="/img/platforms/image@2x.png 2x"
                            src="/img/platforms/image.png"
                            alt=""
                            width="796"
                            height="312"
                            loading="lazy"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
};