import Layout from "@/app/components/Layout";
import styles from "./Kontak.module.css"
import classNames from "classnames";
import ContactForm from "@/app/components/ContactForm";

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
            <ContactForm />
        </Layout>
    )
}

export default Kontak