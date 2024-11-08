import {Typography} from "@mui/joy";
import MainButton from "@/app/components/MainButton";
import Image from "next/image";
import classNames from "classnames";
import styles from "./Hero.module.css";
import {Playfair_Display} from "next/font/google";
import CardService from "@/app/components/CardService";
import Testimoni from "@/app/components/Testimoni";

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: "400",
    display: 'swap',
    variable: '--font-playfair',
})

const service = {
    1: {
        number: 1,
        img: '../../images/kartu1.png',
        title: "Menghadirkan orang ahli",
        desc: "Dengan menghadirkan orang yang ahli dalam bidangnya, kami berharap dapat mempermudah permasalahan pertanian anda.",
    },
    2: {
        number: 2,
        img: '../../images/card2.png',
        title: "Fasilitas alat berkualitas",
        desc: "Dengan alat yang memadai dan bekualitas  dari kami, anda dapat melakukan hal-hal pertanian dengan mudah.",
    },
    3: {
        number: 3,
        img: '../../images/card3.png',
        title: "Konsultasi",
        desc: "Anda juga bisa konsultasi langsung dengan orang ahli yang ada untuk bisa mengkontrol hasil panen serta dapat bertanya seputar pertanian."
    },
    4: {
        number: 4,
        img: '../../images/card4.png',
        title: "Rekap Hasil",
        desc: "Disaat waktu berlangganan sudah berakhir, anda akan diberikan sebuah rekapan hasil sebelum dan sesudah menggunakan layanan kami."
    }
}

const testimoni = {
    1: {
        comment: "Dengan bantuan Petani Pintar, saya bisa fokus pada pengembangan usaha pertanian lainnya. Mereka sangat berpengalaman dan memiliki pengetahuan yang luas tentang teknik budidaya yang baik. Berkat mereka, saya berhasil meningkatkan pendapatan dari hasil pertanian.",
        name: "Alex Fajar",
        position: "Pemilik Sawah Terbesar di Solo",
    },
    2: {
        comment: "Saya sangat senang bisa membantu orang tua mengembangkan sawah keluarga. Dengan adanya Petani Pintar, pekerjaan di sawah menjadi lebih ringan. Kami bisa saling berbagi pengetahuan dan pengalaman, sehingga hasil panen semakin memuaskan. Ini adalah pengalaman yang sangat berharga bagi saya.",
        name: "Kelvin Pradiza",
        position: "Streamer"
    },
    3: {
        comment: "Sejak menggunakan jasa Petani Pintar, saya merasa sangat terbantu. Pekerjaan di sawah yang sebelumnya menyita banyak waktu saya, kini bisa saya delegasikan. Hasil panen pun semakin meningkat, dan kualitasnya juga lebih baik. Saya sangat merekomendasikan jasa ini bagi para petani yang ingin meningkatkan produktivitas lahannya.",
        name: "Yoshua Langkay",
        position: "Pemilik Sawah di Cibutut"
    }
}

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

            <div className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair")}>Layanan Kami</h2>
                <div className={"flex justify-center gap-10 my-5"}>
                    {
                        Object.keys(service).map((key) => {
                            return (
                                <CardService key={key} img={service[key].img} number={service[key].number}
                                             title={service[key].title} desc={service[key].desc}/>
                            )
                        })
                    }
                </div>
            </div>

            <div className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair")}>Testimoni</h2>
                <div className={"flex justify-center gap-10 my-5"}>
                    {
                        Object.keys(testimoni).map((key) => {
                            return (
                                <Testimoni key={key} comment={testimoni[key].comment} name={testimoni[key].name}
                                           position={testimoni[key].position}/>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Hero