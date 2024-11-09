import Layout from "./components/Layout";
import Hero from "@/app/components/Hero";
import classNames from "classnames";
import styles from "@/app/components/Hero/Hero.module.css";
import CardService from "@/app/components/CardService";
import Testimoni from "@/app/components/Testimoni";
import SwitchHarga from "@/app/components/SwitchHarga";
import {Card, CardHeader, Skeleton, Image} from "@nextui-org/react";
import Footer from "@/app/components/Footer";



export default function Home() {

    return (
        <Layout>
            <Hero/>

            <div className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair dark:text-white")}>Layanan
                    Kami</h2>
                <CardService/>
            </div>

            <div className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair dark:text-white")}>Testimoni</h2>
                <Testimoni/>
            </div>

            <div className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair dark:text-white")}>Harga</h2>
                <SwitchHarga/>
            </div>

            <div className={classNames("text-center my-8")}>
                <h2 className={classNames(styles.fontSection, "font-bold text-5xl font-playfair dark:text-white")}>Blog</h2>
                <div className={"my-10 justify-center"}>
                    <Skeleton className={"rounded-xl max-w-screen-xl mx-auto"}>
                        <div className={"h-60 max-w-28"}></div>
                    </Skeleton>
                </div>
                <div className={"flex gap-5 justify-center"}>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://nextui.org/images/card-example-4.jpeg"
                        />
                    </Card>
                </div>
            </div>
            <Footer />
        </Layout>
    );
}
