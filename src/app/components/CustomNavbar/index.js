"use client"
import styles from './Navbar.module.css';
import classNames from "classnames";
import {useState} from "react";
import ThemeToggle from "@/app/components/ThemeToggle";
import Icon from "@/app/components/Icon";
import {
    Button,
    Dropdown, DropdownItem, DropdownMenu, DropdownTrigger,
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import Link from "next/link";
import {RiCustomerService2Line} from "react-icons/ri";
import {IoSettingsOutline} from "react-icons/io5";
import {IoChevronDownOutline} from "react-icons/io5";


const CustomNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: "Beranda",
            link: "/",
        },
        {
            name: "Layanan",
            link: "#Layanan",
        },
        {
            name: "Testimoni",
            link: "#Testimoni",
        },
        {
            name: "Harga",
            link: "#Harga",
        },
        {
            name: "Blog",
            link: "#Blog",
        },
        {
            name: "Kontak",
            link: "#Kontak",
        },
    ];

    return (
        <Navbar maxWidth={"full"} onMenuOpenChange={setIsMenuOpen}
                className={classNames(styles.nav, "dark:bg-medium dark:text-white")}>
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                {
                    isMenuOpen ? <ThemeToggle/> : <Icon/>
                }

                <NavbarContent className="hidden text-black sm:flex gap-4" justify="start">
                    <NavbarItem className={"dark:text-white font-bold"}>
                        <Link href="#Layanan" aria-current="page">
                            Layanan
                        </Link>
                    </NavbarItem>
                    <NavbarItem className={"dark:text-white font-bold"}>
                        <Link href="#Testimoni" aria-current="page">
                            Testimoni
                        </Link>
                    </NavbarItem>
                    <NavbarItem className={"dark:text-white font-bold"}>
                        <Link href="#Harga">
                            Harga
                        </Link>
                    </NavbarItem>
                    <NavbarItem className={"dark:text-white font-bold"}>
                        <Link href="#Blog">
                            Blog
                        </Link>
                    </NavbarItem>
                </NavbarContent>

            </NavbarContent>

            <NavbarContent className={"hidden md:flex"} justify="end">
                <Dropdown className={"bg-[#EDF7F6] dark:bg-medium"}>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                className={"bg-transparent p-0 data-[hover=true]:bg-transparent flex items-center justify-center font-bold dark:text-white"}
                                disableRipple
                                endContent={<IoChevronDownOutline className={"self-center font-bold text-xl"}/>}
                                radius={"sm"}
                            >
                                Bantuan
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        className={"w-[340px] bg-[#EDF7F6] rounded-xl dark:text-white dark:bg-medium"}
                        itemClasses={{
                            base: "gap-4"
                        }}
                    >
                        <DropdownItem key={"Kontak"}
                                      description={"Jika ada yang ingin ditanyakan ataupun berkonsultasi silahkan hubungi kami."}
                                      startContent={<RiCustomerService2Line className={"text-2xl"}/>}>
                            Kontak
                        </DropdownItem>
                        <DropdownItem key={"DarkMode"}
                                      description={"Ubah tampilan website menjadi gelap menyesuaikan dengan mata anda."}
                                      startContent={<ThemeToggle/>}>
                            Dark Mode
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`} className={"text-slate-950 font-bold"}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.link}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>

    )
}

export default CustomNavbar