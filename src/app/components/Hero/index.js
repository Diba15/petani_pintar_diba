import {Typography} from "@mui/joy";
import MainButton from "@/app/components/MainButton";
import Image from "next/image";
import farmer_image from "../../images/farmer_image.jpg";

const Hero = () => {
    return (
        <div className="my-5 text-center dark:text-white font-serif">
            <Typography className="dark:text-white" level="h1">Selamat datang di Petani Pintar</Typography>
            <Typography className="mx-auto my-3 text-center w-3/4" level="h5">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Architecto atque
                debitis, dicta doloribus dolorum eum exercitationem fugiat iste maxime nesciunt nihil nobis odit
                porro rem repudiandae soluta, sunt tempora vel?</Typography>
            <div className="flex flex-row gap-4 mx-auto justify-center my-5" id="button-group">
                <MainButton>Pesan Sekarang!</MainButton>
                <MainButton>Kontak Kami!</MainButton>
            </div>
            <div className="w-100 h-100 relative">
                <Image fill src={farmer_image} alt="farmer"/>
            </div>
        </div>
    )
}

export default Hero