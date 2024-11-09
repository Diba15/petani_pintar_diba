'use client'
import styles from "./CardService.module.css";
import classNames from "classnames";

const Card = ({img, number, title, desc}) => {
    return (
        <div className={classNames(styles.card, "card min-h-96 rounded-xl")}>
            <div className={classNames(styles.cardSection, "p-5 min-h-96 rounded-xl")}>
                <h1 className={"text-start font-bold text-4xl"}>{number}</h1>
                <div className={"pt-20 flex flex-col justify-between h-80"}>
                    <h1 className={"font-bold text-3xl"}>{title}</h1>
                    <h4 className={"mb-10"}>{desc}</h4>
                </div>
            </div>
        </div>
    )
}

const CardService = () => {

    const services = [
        {
            number: 1,
            img: '../../images/kartu1.png',
            title: "Menghadirkan orang ahli",
            desc: "Dengan menghadirkan orang yang ahli dalam bidangnya, kami berharap dapat mempermudah permasalahan pertanian anda.",
        },
        {
            number: 2,
            img: '../../images/card2.png',
            title: "Fasilitas alat berkualitas",
            desc: "Dengan alat yang memadai dan bekualitas  dari kami, anda dapat melakukan hal-hal pertanian dengan mudah.",
        },
        {
            number: 3,
            img: '../../images/card3.png',
            title: "Konsultasi",
            desc: "Anda juga bisa konsultasi langsung dengan orang ahli yang ada untuk bisa mengkontrol hasil panen serta dapat bertanya seputar pertanian."
        },
        {
            number: 4,
            img: '../../images/card4.png',
            title: "Rekap Hasil",
            desc: "Disaat waktu berlangganan sudah berakhir, anda akan diberikan sebuah rekapan hasil sebelum dan sesudah menggunakan layanan kami."
        }
    ]


    return (
        <div className={"flex justify-center gap-10 my-7"}>
            {
                services.map((service, index) => {
                    return (
                        <Card key={`card-service-${index}`} {...service}/>
                    )
                })
            }
        </div>
    )
}

export default CardService