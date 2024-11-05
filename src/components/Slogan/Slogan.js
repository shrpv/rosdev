import classNames from "classnames";
import styles from "./Slogan.module.scss";

export const Slogan = ({ className }) => {
    return (
        <section className={className}>
            <div className="container">
                <h2 className="visuallyHidden">Наши убеждения</h2>

                <div className={styles.slogan__banner}>
                    <div className={styles.slogan__content}>
                        <p className={classNames(styles.slogan__title, "title")}>
                            Мы абсолютно <em className="gradientText">убеждены</em>
                        </p>

                        <p className={styles.slogan__description}>
                            — сейчас лучшее время для развития отечественной IT индустрии и создания новых российских
                            современных технологичных продуктов.
                        </p>
                    </div>

                    <img
                        className={styles.slogan__image}
                        src="/img/slogan/image.svg"
                        alt=""
                        width="633"
                        height="321"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};
