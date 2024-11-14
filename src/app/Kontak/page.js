import Layout from "@/app/components/Layout";
import styles from "./Kontak.module.css"
import classNames from "classnames";
import {Button, Input, Textarea} from "@nextui-org/react";
import {HiMiniPaperAirplane} from "react-icons/hi2";
import SelectCategory from "@/app/components/SelectCategory";

const Kontak = () => {
    return (
        <Layout>
            <div className={"text-center px-5 py-8 flex flex-col gap-3"}>
                <h1 className={classNames(styles.kontak, "text-5xl font-bold dark:text-white")}>Apakah Terdapat
                    Pertanyaan?</h1>
                <h6 className={"max-w-screen-lg text-center mx-auto dark:text-white"}>Terima kasih telah tertarik dengan
                    layanan kami,
                    jika anda memiliki pertanyaan silahkan hubungi kami
                    melalui e-mail di bawah ini <span className={"text-harga"}>petanipintar@businessemail.id</span> dan
                    kami akan segera menghubungi anda.</h6>
            </div>
            <div
                className={"flex flex-col px-5 gap-6 justify-between max-w-screen-md mx-auto pb-8 dark:text-white md:flex-row"}>
                <div className={"min-h-96 min-w-full shadow bg-white p-5 rounded-xl flex flex-col gap-3 dark:bg-dark"}>
                    <Input
                        isRequired
                        type={"text"}
                        label={"Nama"}
                        placeholder={"Masukkan Nama"}
                        fullWidth
                    />
                    <Input
                        isRequired
                        type={"number"}
                        label={"No.Handphone"}
                        placeholder={"Masukkan No.Handphone"}
                        fullWidth
                    />
                    <Input
                        isRequired
                        type={"email"}
                        label={"E-mail"}
                        placeholder={"Masukkan E-mail"}
                        fullWidth
                    />
                    <SelectCategory />
                    <Textarea
                        fullWidth
                        isRequired
                        label={"Pertanyaan"}
                        placeholder={"Masukkan Pertanyaan"}
                        rows={5}
                    />
                    <Button className={"bg-harga text-white"}>Submit <HiMiniPaperAirplane/></Button>
                </div>
            </div>
        </Layout>
    )
}

export default Kontak