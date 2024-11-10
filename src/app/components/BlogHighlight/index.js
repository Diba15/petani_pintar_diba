import {Card} from "@nextui-org/react";
import styles from "./BlogHighlight.module.css"
import classNames from "classnames";
import MainButton from "@/app/components/MainButton";

const BlogHighlight = () => {
    return (
        <Card className={classNames(styles.card, "flex max-w-2xl rounded-xl mx-5 lg:max-w-screen-xl")}>
            <div className={"py-28 px-20 bg-black bg-opacity-50 text-start h-full"}>
                <h1 className={"text-4xl font-bold line-clamp-3 max-w-2xl mb-10"}>Para pengguna Petani pintar telah membuktikan bahwa menggunakan
                    Petani Pintar dapat meningkatkan produktivitas pertanian</h1>
                <MainButton>Lebih Lengkap</MainButton>
            </div>
        </Card>
    )
}

export default BlogHighlight