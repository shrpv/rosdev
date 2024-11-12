import styles from "./page.module.scss";
import { Hero } from "@/components/Hero/ui/Hero";
import { Advantages } from "@/components/Advantages/ui/Advantages";
import { Platforms } from "@/components/Platforms/Platforms";
import { Services } from "@/components/Services/Services";
import { Technologies } from "@/components/Technologies/Technologies";
import { Clients } from "@/components/Clients/Clients";
import { Reviews } from "@/components/Reviews/Reviews";
import { About } from "@/components/About/About";
import { Slogan } from "@/components/Slogan/Slogan";

export default function Page() {
    return (
        <>
            <Hero className={styles.home__hero} />

            <Advantages className={styles.home__advantages} />

            <Platforms className={styles.home__platforms} />

            <Services className={styles.home__services} />

            <Technologies className={styles.home__technologies} />

            <Clients className={styles.home__clients} />

            <Reviews className={styles.home__reviews} />

            <About className={styles.home__about} />

            <Slogan className={styles.home__slogan} />
        </>
    );
}
