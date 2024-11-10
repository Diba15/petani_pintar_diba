import classNames from "classnames";
import styles from "./MainButton.module.css"

const MainButton = ({children}) => {
    return (
        <div
            className={classNames(styles.MainButton,"p-3 px-5 border-2 rounded-2xl cursor-pointer border-white max-w-fit")}>
            <h3 className="font-bold font-playfair">{children}</h3>
        </div>
    )
}

export default MainButton