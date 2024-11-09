
import MainButton from "@/app/components/MainButton";
import classNames from "classnames";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div>
            <div className={classNames(styles.hero, "mx-0 px-0 dark:text-white")}>
                <div className={classNames(styles.backgroundHero, "font-playfair px-32 py-20")}>
                    <h1 className={classNames("text-white text-7xl font-extrabold leading-tight")}>Kami Hadir
                        Untuk <br/> Mendukung <br/> Keberhasilan <br/> Pertanian Anda</h1>
                    <h6 className={"text-white my-10"}>
                        Dengan cara menghadirkan ahli serta <br/>
                        kebutuhan alat yang baik.
                    </h6>
                    <MainButton>Pelajari Lebih Lanjut</MainButton>
                </div>
            </div>
        </div>
    )
}

export default Hero