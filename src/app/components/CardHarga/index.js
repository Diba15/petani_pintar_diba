import styles from "./CardHarga.module.css"
import {Button} from "@nextui-org/react";
import { BsCheckCircleFill } from "react-icons/bs";

const CardHarga = ({namePack, price, priceType, duration, serviceList}) => {
    return (
        <div className={"bg-white max-w-[50vw] rounded-xl p-5 shadow lg:max-w-96"}>
            <div className={"flex flex-col text-center justify-center"}>
                <h6 className={"font-bold text-2xl"}>{namePack}</h6>
                <div className={"flex flex-row text-harga text-center justify-center align-text-bottom"}>
                    <h1 className={"text-4xl font-extrabold"}>{price}</h1>
                    <div className={"flex flex-row"}>
                        <h4 className={"text-4xl font-extrabold"}>{priceType}</h4>
                        <h6 className={"h-fit self-end"}>/{duration}</h6>
                    </div>
                </div>
            </div>

            <div className={"flex flex-col gap-3 my-5"}>
                {
                    namePack === "Biasa" && (
                        serviceList.map((service, index) => (
                            <div key={`service-${index}`} className={"flex flex-row justify-between gap-3"}>
                                <h6 className={"text-harga font-bold"}>{service}</h6>
                                {
                                    namePack === "Biasa" && index > 3 ? (
                                        <h6 className={"text-xl text-gray-400"}><BsCheckCircleFill/></h6>
                                    ) : <h6 className={"text-xl text-harga"}><BsCheckCircleFill/></h6>

                                }
                            </div>
                        ))
                    )
                }
                {
                    namePack === "Standar" && (
                        serviceList.map((service, index) => (
                            <div key={`service-${index}`} className={"flex flex-row justify-between gap-3"}>
                                <h6 className={"text-harga font-bold"}>{service}</h6>
                                {
                                    namePack === "Standar" && index > 6 ? (
                                        <h6 className={"text-xl text-gray-400"}><BsCheckCircleFill/></h6>
                                    ) : <h6 className={"text-xl text-harga"}><BsCheckCircleFill/></h6>
                                }
                            </div>
                        ))
                    )
                }
                {
                    namePack === "Eksklusif" && (
                        serviceList.map((service, index) => (
                            <div key={`service-${index}`} className={"flex flex-row justify-between gap-3"}>
                                <h6 className={"text-harga font-bold"}>{service}</h6>
                                <h6 className={"text-xl text-harga"}><BsCheckCircleFill/></h6>
                            </div>
                        ))
                    )
                }
            </div>

            <div>
                <Button color="success" className={"text-center text-white w-full bg-harga font-bold"}>Beli Paket</Button>
            </div>
        </div>
    )
}

export default CardHarga