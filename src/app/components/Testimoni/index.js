"use client"
import styles from "./Testimoni.module.css";
import classNames from "classnames";
import {Card} from "@nextui-org/react";
import {useState} from "react";
import {ChevronDown, ChevronUp} from "react-bootstrap-icons";

const TestimoniCard = ({img, comment, name, position}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // return (
    //     <div
    //         className={classNames(styles.testimoni, "min-h-72 py-5 px-11 bg-white rounded-xl shadow flex flex-col mb-10 justify-around")}>
    //         <div>
    //             <h6 className={classNames("max-h-72 text-justify")}>&quot;{comment}&rdquo;</h6>
    //         </div>
    //         <div className={classNames("flex flex-row gap-3")}>
    //             <User
    //                 name={name}
    //                 description={position}
    //                 avatarProps={{
    //                     src: img
    //                 }}
    //             />
    //         </div>
    //     </div>
    // )
    return (
        <Card className="max-w-sm bg-white rounded-lg shadow-md mb-3 md:max-w-xl">
            <div className="p-6">

                {/*{Desktop}*/}
                <div className="hidden md:flex md:flex-col md:h-[220px]">
                    <div className="flex-grow">
                        <p className="text-sm text-gray-600 text-justify">
                            &#34;{comment}&#34;
                        </p>
                    </div>

                    <div className="flex items-center space-x-3 pt-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img
                                src={img}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-start">{name}</h4>
                            <p className="text-xs text-gray-500 text-start">{position}</p>
                        </div>
                    </div>
                </div>

                {/*{Mobile}*/}
                <div className="md:hidden">
                    <div className={`space-y-4 ${isExpanded ? '' : 'max-h-24 overflow-hidden'}`}>
                        <p className="text-sm text-gray-600 text-justify">
                            &#34;{comment}&#34;
                        </p>
                    </div>

                    <button
                        className="w-full text-center mt-2 text-blue-500 flex items-center justify-center gap-1"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? (
                            <>
                                Lihat lebih sedikit <ChevronUp size={16}/>
                            </>
                        ) : (
                            <>
                                Lihat selengkapnya <ChevronDown size={16}/>
                            </>
                        )}
                    </button>

                    <div className="flex items-start space-x-3 mt-4 pt-4 ">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img
                                src={img}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-start">{name}</h4>
                            <p className="text-xs text-gray-500 text-start">{position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
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
            <div className={classNames("flex snap-x snap-mandatory overflow-x-auto gap-4 my-7 mx-7")}>
                {
                    testimonis.map((testimoni, index) => (
                        <div key={`testimoni-1-${index}`} className={"snap-center shrink-0"}>
                            <TestimoniCard {...testimoni}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimoni