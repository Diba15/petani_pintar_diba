import styles from "./Testimoni.module.css";
import classNames from "classnames";
import {User} from "@nextui-org/react";

const TestimoniCard = ({img, comment, name, position}) => {
    return (
        <div
            className={classNames(styles.testimoni, "min-h-72 py-5 px-11 bg-white rounded-xl shadow flex flex-col mb-10 justify-around")}>
            <div>
                <h6 className={classNames("text-justify")}>&quot;{comment}&rdquo;</h6>
            </div>
            <div className={classNames("flex flex-row gap-3")}>
                <User
                    name={name}
                    description={position}
                    avatarProps={{
                        src: img
                    }}
                />
            </div>
        </div>
    )
}

const Testimoni = () => {

    const testimonis = [
        {
            img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            comment: "Dengan bantuan Petani Pintar, saya bisa fokus pada pengembangan usaha pertanian lainnya. Mereka sangat berpengalaman dan memiliki pengetahuan yang luas tentang teknik budidaya yang baik. Berkat mereka, saya berhasil meningkatkan pendapatan dari hasil pertanian.",
            name: "Alex Fajar",
            position: "Pemilik Sawah Terbesar di Solo",
        },
        {
            img: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            comment: "Saya sangat senang bisa membantu orang tua mengembangkan sawah keluarga. Dengan adanya Petani Pintar, pekerjaan di sawah menjadi lebih ringan. Kami bisa saling berbagi pengetahuan dan pengalaman, sehingga hasil panen semakin memuaskan. Ini adalah pengalaman yang sangat berharga bagi saya.",
            name: "Kelvin Pradiza",
            position: "Streamer"
        },
        {
            img: "https://i.pravatar.cc/150?u=a04258114e29026708c",
            comment: "Sejak menggunakan jasa Petani Pintar, saya merasa sangat terbantu. Pekerjaan di sawah yang sebelumnya menyita banyak waktu saya, kini bisa saya delegasikan. Hasil panen pun semakin meningkat, dan kualitasnya juga lebih baik. Saya sangat merekomendasikan jasa ini bagi para petani yang ingin meningkatkan produktivitas lahannya.",
            name: "Yoshua Langkay",
            position: "Pemilik Sawah di Cibutut"
        },
        {
            img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            comment: "Saya sangat terbantu dengan adanya Petani Pintar. Dengan mereka, saya bisa memperoleh hasil panen yang lebih baik dan efisien. Saya sangat merekomendasikan jasa ini bagi para petani yang ingin meningkatkan pendapatannya.",
            name: "Rizki Ananda",
            position: "Pemilik Sawah di Cimahi"
        },
        {
            img: "https://avatars.githubusercontent.com/u/30373425?v=4",
            comment: "Saya sangat senang bisa membantu ayah mengembangkan sawah keluarga. Dengan adanya Petani Pintar, pekerjaan di sawah menjadi lebih ringan. Kami bisa saling berbagi pengetahuan dan pengalaman, sehingga hasil panen semakin memuaskan.",
            name: "Farhan",
            position: "Mahasiswa"
        },
        {
            img: "https://i.pravatar.cc/150?u=a04258114e29026708c",
            comment: "Sejak menggunakan jasa Petani Pintar, saya merasa sangat terbantu. Pekerjaan di sawah yang sebelumnya menyita banyak waktu saya, kini bisa saya delegasikan. Hasil panen pun semakin meningkat, dan kualitasnya juga lebih baik.",
            name: "Aldi",
            position: "Pemilik Sawah di Tangerang"
        }
    ]


    return (
        <div className={"w-full overflow-hidden"}>
            <div className={"relative"}>
                <div className={classNames(styles.animateScroll, "flex justify-center gap-10 my-7")}>
                    {
                        testimonis.map((testimoni, index) => (
                            <TestimoniCard key={`testimoni-1-${index}`} {...testimoni}/>
                        ))
                    }
                    {
                        testimonis.map((testimoni, index) => (
                            <TestimoniCard key={`testimoni-2-${index}`} {...testimoni}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimoni