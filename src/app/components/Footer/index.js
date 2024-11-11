import {List, ListItem, ListItemDecorator, Typography} from "@mui/joy";
import Link from "next/link";
import {Divider} from "@nextui-org/react";
import Icon from "@/app/components/Icon";
import { BsFacebook, BsInstagram, BsWhatsapp, BsEnvelopeFill } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="bg-transparent min-h-60 py-6 dark:bg-dark">
            <div className="container max-w-3xl mx-auto flex flex-col gap-16 justify-center md:flex-row">
                <div>
                    <div>
                        <List
                            size="sm"
                            variant="plain"
                            sx={{maxWidth: 300, borderRadius: 'sm'}}
                        >
                            <ListItem>
                                <Typography
                                    id="decorated-list-demo"
                                    level="body-xs"
                                    sx={{textTransform: 'uppercase', fontWeight: 'lg', mb: 1}}
                                >
                                    Halaman Utama
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href="#" aria-current="page" className={"dark:text-white"}>
                                    Beranda
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#Layanan" aria-current="page" className={"dark:text-white"}>
                                    Layanan
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#Harga" aria-current="page" className={"dark:text-white"}>
                                    Harga
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#Blog" aria-current="page" className={"dark:text-white"}>
                                    Blog
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                </div>
                <div>
                    <div>
                        <List
                            size="sm"
                            variant="plain"
                            sx={{maxWidth: 300, borderRadius: 'sm'}}
                        >
                            <ListItem>
                                <Typography
                                    id="decorated-list-demo"
                                    level="body-xs"
                                    sx={{ textTransform: 'uppercase', fontWeight: 'lg', mb: 1 }}
                                >
                                    Eksplor
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"dark:text-white"}>
                                    Sumber
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"dark:text-white"}>
                                    Blog Utama
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"dark:text-white"}>
                                    Dokumentasi
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                </div>
                <div>
                    <div>
                        <List
                            size="sm"
                            variant="plain"
                            sx={{maxWidth: 300, borderRadius: 'sm'}}
                        >
                            <ListItem>
                                <Typography
                                    id="decorated-list-demo"
                                    level="body-xs"
                                    sx={{ textTransform: 'uppercase', fontWeight: 'lg', mb: 1 }}
                                >
                                    Perusahaan
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"dark:text-white"}>
                                    Tentang Kami
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"dark:text-white"}>
                                    Mitra Kami
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"dark:text-white"}>
                                    Pelanggan
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"dark:text-white"}>
                                    Hubungi Kami
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                </div>
                <div>
                    <div>
                        <List
                            size="sm"
                            variant="plain"
                            sx={{maxWidth: 300, borderRadius: 'sm'}}
                        >
                            <ListItem>
                                <Typography
                                    id="decorated-list-demo"
                                    level="body-xs"
                                    sx={{ textTransform: 'uppercase', fontWeight: 'lg', mb: 1 }}
                                >
                                    Hubungi Kami Melalui
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"flex align-middle self-baseline dark:text-white"}>
                                    <ListItemDecorator><BsEnvelopeFill /></ListItemDecorator>
                                    petanipintar@businessmail.com
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"flex align-middle self-baseline dark:text-white"}>
                                    <ListItemDecorator><BsFacebook /></ListItemDecorator>
                                    Petani Pintar
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"flex align-middle self-baseline dark:text-white"}>
                                    <ListItemDecorator><BsInstagram /></ListItemDecorator>
                                    petani.pintar
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="" aria-current="page" className={"flex align-middle self-baseline dark:text-white"}>
                                    <ListItemDecorator><BsWhatsapp /></ListItemDecorator>
                                    +62 825-1111-2222
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
            <div className={"max-w-3xl mx-auto py-3"}>
                <Divider clasName={"my-3"} />
                <Icon />
            </div>
        </footer>
    )
}

export default Footer