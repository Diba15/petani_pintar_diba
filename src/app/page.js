import Layout from "./components/Layout";
import Hero from "@/app/components/Hero";
import classNames from "classnames";
import styles from "@/app/components/Hero/Hero.module.css";
import CardService from "@/app/components/CardService";
import Testimoni from "@/app/components/Testimoni";
import SwitchHarga from "@/app/components/SwitchHarga";
import Footer from "@/app/components/Footer";
import BlogHighlight from "@/app/components/BlogHighlight";
import BlogCard from "@/app/components/BlogCard";
import {Divider} from "@nextui-org/react";



export default function Home() {

    return (
        <Layout>
            <Hero/>

            <div id={"Layanan"} className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair dark:text-white")}>Layanan
                    Kami</h2>
                <CardService/>
            </div>

            <div id={"Testimoni"} className={classNames("text-center my-8 justify-center")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair dark:text-white")}>Testimoni</h2>
                <Testimoni/>
            </div>

            <div id={"Harga"} className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair dark:text-white")}>Harga</h2>
                <SwitchHarga/>
            </div>

            <div id={"Blog"} className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair dark:text-white")}>Blog</h2>
                <div className={"my-10 flex justify-center mx-auto"}>
                    <BlogHighlight />
                </div>
                <div className={"flex flex-col my-5 justify-center lg:flex-row"}>
                    <BlogCard />
                </div>
            </div>
            <Divider />
            <Footer />
        </Layout>
    );
}
