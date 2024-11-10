'use client'
import styles from "./CardService.module.css";
import classNames from "classnames";
import kartu1 from "../../images/kartu1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import Image from "next/image";


const Card = ({img, number, title, desc}) => {
    return (
        <div style={{backgroundImage: `url(${img})`}} className={classNames("max-w-[50vw] text-white relative min-h-96 rounded-xl overflow-hidden lg:max-w-[40vh]")}>
            <Image src={img} alt={title} fill className={"object-cover"} priority/>
            <div className={classNames(styles.cardSection, "p-5 min-h-96 rounded-xl relative z-10")}>
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
            img: kartu1,
            title: "Menghadirkan orang ahli",
            desc: "Dengan menghadirkan orang yang ahli dalam bidangnya, kami berharap dapat mempermudah permasalahan pertanian anda.",
        },
        {
            number: 2,
            img: card2,
            title: "Fasilitas alat berkualitas",
            desc: "Dengan alat yang memadai dan bekualitas  dari kami, anda dapat melakukan hal-hal pertanian dengan mudah.",
        },
        {
            number: 3,
            img: card3,
            title: "Konsultasi",
            desc: "Anda juga bisa konsultasi langsung dengan orang ahli yang ada untuk bisa mengkontrol hasil panen serta dapat bertanya seputar pertanian."
        },
        {
            number: 4,
            img: card4,
            title: "Rekap Hasil",
            desc: "Disaat waktu berlangganan sudah berakhir, anda akan diberikan sebuah rekapan hasil sebelum dan sesudah menggunakan layanan kami."
        }
    ]


    return (
        <div className={"flex flex-col justify-center gap-10 my-7 mx-auto items-center lg:flex-row"}>
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