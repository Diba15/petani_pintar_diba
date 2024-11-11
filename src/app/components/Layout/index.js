import CustomNavbar from "@/app/components/CustomNavbar";
import {NextUIProvider} from "@nextui-org/react";
import classNames from "classnames";
import styles from "./Layout.module.css";


const Layout = ({children}) => {
    return (
        <NextUIProvider>
            <CustomNavbar/>
            <div className={classNames(styles.container, "py-0", "px-0", "m-9", "dark:bg-medium", "min-h-fit")}>
                {children}
            </div>
        </NextUIProvider>
    )
}

export default Layout;