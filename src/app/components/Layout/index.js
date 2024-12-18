import { Analytics } from '@vercel/analytics/next';
import {SpeedInsights} from "@vercel/speed-insights/next";
import CustomNavbar from "@/app/components/CustomNavbar";
import {Divider, NextUIProvider} from "@nextui-org/react";
import classNames from "classnames";
import styles from "./Layout.module.css";
import Footer from "@/app/components/Footer";


const Layout = ({children}) => {
    return (
        <NextUIProvider>
            <CustomNavbar/>

            <div className={classNames(styles.container, "py-0", "px-0", "m-9", "dark:bg-medium", "min-h-fit", "scroll-smooth")}>
                {children}
                <SpeedInsights />
                <Analytics />
            </div>

            <Divider />
            <Footer />
        </NextUIProvider>
    )
}

export default Layout;