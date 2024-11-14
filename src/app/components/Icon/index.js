import classNames from "classnames";
import styles from "@/app/components/Icon/Icon.module.css";
import Image from "next/image";
import Leaf from "@/app/images/leaf.svg";
import Link from "next/link";

const Icon = () => {
    return (
        <Link href={"/"}>
            <h3 className={classNames(styles.icon, "flex", "flex-row", "gap-2", "items-center", "dark:text-white")}>Petani
                <span><Image src={Leaf} alt="Leaf" width={30} height={30}/></span>
                Pintar</h3>
        </Link>
    )
}

export default Icon;