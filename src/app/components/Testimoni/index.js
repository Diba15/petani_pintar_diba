import styles from "./Testimoni.module.css";
import classNames from "classnames";
import {Avatar} from "@nextui-org/react";

const Testimoni = ({comment, name, position}) => {
    return (
        <div className={classNames(styles.testimoni, "min-h-72 py-5 px-11 bg-white rounded-xl shadow flex flex-col gap-2 mb-10 justify-between")}>
            <div>
                <h6 className={classNames("text-justify")}>&quot;{comment}&rdquo;</h6>
            </div>
            <div className={classNames("flex flex-row gap-3")}>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="lg"/>
                <div>
                    <h3 className={"font-bold text-start"}>{name}</h3>
                    <h6 className={"text-gray-400 text-start"}>{position}</h6>
                </div>
            </div>
        </div>
    )
}

export default Testimoni