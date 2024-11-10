"use client"
import styles from "./SwitchHarga.module.css";
import classNames from "classnames";
import {useState} from "react";
import CardHarga from "@/app/components/CardHarga";

const SwitchHarga = () => {
    const [isActive, setIsActive] = useState('Bulanan');

    const servicePrice = [
        {
            namePack: "Biasa",
            price: 500,
            priceType: "Rb",
        },
        {
            namePack: "Standar",
            price: 2.5,
            priceType: "Jt",
        },
        {
            namePack: "Eksklusif",
            price: 10,
            priceType: "Jt",
        }
    ]

    const serviceList = ["Orang Ahli", "Perlatan Pertanian", "Konsultasi Gratis", "Rekap Hasil", "Arahan Langsung dari Ahli", "Ajaran Penggunaan Alat", "Mapping Lahan Sawah", "Prioritas Pelanggan", "Pekerja Extra Gratis"];

    return (
        <div className={""}>
            <div className={"flex justify-center my-5 border-harga border-1 rounded-xl w-fit mx-auto"}>
                <div onClick={() => setIsActive("Mingguan")}
                     className={classNames(styles.fontSection, `p-3 rounded-bl-xl rounded-tl-xl font-bold cursor-pointer ${isActive === "Mingguan" ? "bg-harga text-white" : "text-harga"}`)}>
                    <h5>Mingguan</h5>
                </div>
                <div onClick={() => setIsActive("Bulanan")}
                     className={classNames(styles.fontSection, `p-3 font-bold cursor-pointer ${isActive === "Bulanan" ? "bg-harga text-white" : "text-harga"}`)}>
                    <h5>Bulanan</h5>
                </div>
                <div onClick={() => setIsActive("Tahunan")}
                     className={classNames(styles.fontSection, `p-3 rounded-br-xl rounded-tr-xl font-bold cursor-pointer ${isActive === "Tahunan" ? "bg-harga text-white" : "text-harga"}`)}>
                    <h5>Tahunan</h5>
                </div>
            </div>

            <div className={"flex flex-col justify-center mx-auto gap-10 items-center lg:flex-row"}>
                {
                    isActive === "Mingguan" && (
                        servicePrice.map((item, index) => (
                            <CardHarga
                                key={index}
                                namePack={item.namePack}
                                price={item.price}
                                priceType={item.priceType}
                                duration={"Minggu"}
                                serviceList={serviceList}
                            />
                        ))
                    )
                }
                {
                    isActive === "Bulanan" && (
                        servicePrice.map((item, index) => (
                            <CardHarga
                                key={index}
                                namePack={item.namePack}
                                price={item.price}
                                priceType={item.priceType}
                                duration={"Bulan"}
                                serviceList={serviceList}
                            />
                        ))
                    )
                }
                {
                    isActive === "Tahunan" && (
                        servicePrice.map((item, index) => (
                            <CardHarga
                                key={index}
                                namePack={item.namePack}
                                price={item.price}
                                priceType={item.priceType}
                                duration={"Tahun"}
                                serviceList={serviceList}
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default SwitchHarga