'use client'
import styles from "./CardService.module.css";
import classNames from "classnames";

const CardService = ({img, number, title, desc}) => {
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

export default CardService