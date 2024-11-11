"use client"
import styles from './Navbar.module.css';
import classNames from "classnames";
import {useState} from "react";
import ThemeToggle from "@/app/components/ThemeToggle";
import Icon from "@/app/components/Icon";
import {Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import Link from "next/link";

const CustomNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Beranda",
        "Layanan",
        "Harga",
        "Blog",
        "Kontak",
    ];

    return (
        <Navbar shouldHideOnScroll maxWidth={"full"} onMenuOpenChange={setIsMenuOpen} className={classNames(styles.nav, "dark:bg-medium dark:text-white")}>
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Icon />

                <NavbarContent className="hidden text-black sm:flex gap-4" justify="start">
                    <NavbarItem className={"dark:text-white font-bold"}>
                        <Link href="#Layanan" aria-current="page">
                            Layanan
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
                    <NavbarItem className={"text-blue-400 hover:text-blue-600 font-bold"}>
                        <Link href="#">
                            Kontak
                        </Link>
                    </NavbarItem>
                </NavbarContent>

            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <div>
                        <ThemeToggle/>
                    </div>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} className={"text-black"}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>

    )
}

export default CustomNavbar