import Navbar from "@/app/components/Navbar";
import {NextUIProvider} from "@nextui-org/react";
import classNames from "classnames";
import styles from "./Layout.module.css";


const Layout = ({children}) => {
    return (
        <NextUIProvider>
            <Navbar/>
            <div className={classNames(styles.container,"container", "p-4", "m-9", "dark:bg-medium")}>
                {children}
            </div>
        </NextUIProvider>
    )
}

export default Layout;