"use client"
import styles from './Navbar.module.css';
import classNames from "classnames";
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {Box, Drawer, IconButton, Input, List, ListItemButton, ModalClose, Typography} from "@mui/joy";
import ThemeToggle from "@/app/components/ThemeToggle";
import Icon from "@/app/components/Icon";
import {Search} from "react-bootstrap-icons";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className={classNames(styles.nav, "bg-transparent", "justify-between", "dark:bg-medium")}>
            <div className="flex flex-row items-center gap-5">
                <IconButton variant="outlined" className="text-black lg:hidden dark:text-white"
                            onClick={() => setOpen(true)}>
                    <GiHamburgerMenu/>
                </IconButton>
                <div>
                    <Drawer open={open} onClose={() => setOpen(false)}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                                ml: 'auto',
                                mt: 1,
                                mr: 2,
                            }}
                        >
                            <Typography
                                component="label"
                                htmlFor="close-icon"
                                sx={{fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer'}}
                            >
                                Close
                            </Typography>
                            <ModalClose id="close-icon" sx={{position: 'initial'}}/>
                        </Box>
                        <Input
                            size="sm"
                            placeholder="Search"
                            variant="plain"
                            endDecorator={<Search/>}
                            slotProps={{
                                input: {
                                    'aria-label': 'Search anything',
                                },
                            }}
                            sx={{
                                m: 3,
                                borderRadius: 0,
                                borderBottom: '2px solid',
                                borderColor: 'neutral.outlinedBorder',
                                '&:hover': {
                                    borderColor: 'neutral.outlinedHoverBorder',
                                },
                                '&::before': {
                                    border: '1px solid var(--Input-focusedHighlight)',
                                    transform: 'scaleX(0)',
                                    left: 0,
                                    right: 0,
                                    bottom: '-2px',
                                    top: 'unset',
                                    transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                                    borderRadius: 0,
                                },
                                '&:focus-within::before': {
                                    transform: 'scaleX(1)',
                                },
                            }}
                        />
                        <List
                            size="lg"
                            component="nav"
                            sx={{
                                flex: 'none',
                                fontSize: 'xl',
                                '& > div': {justifyContent: 'center'},
                            }}
                        >
                            <ListItemButton sx={{fontWeight: 'lg'}}>Beranda</ListItemButton>
                            <ListItemButton>Harga</ListItemButton>
                            <ListItemButton>Kontak</ListItemButton>
                            <ListItemButton>Blog</ListItemButton>
                            <ListItemButton>Layanan</ListItemButton>
                        </List>
                    </Drawer>
                </div>
                <Icon/>
                <div className="hidden lg:flex lg:items-center">
                    <ul className="flex gap-10 items-center flex-1 justify-end text-gray-900 dark:text-white font-bold">
                        <li className="font-bold text-green-600 cursor-pointer">Beranda</li>
                        <li className="hover:text-green-600 transition duration-300 ease-in-out cursor-pointer">Harga</li>
                        <li className="hover:text-green-600 transition duration-300 ease-in-out cursor-pointer">Kontak</li>
                        <li className="hover:text-green-600 transition duration-300 ease-in-out cursor-pointer">Blog</li>
                        <li className="hover:text-green-600 transition duration-300 ease-in-out cursor-pointer">Layanan</li>
                    </ul>
                </div>
            </div>
            <div>
                <ThemeToggle/>
            </div>
        </nav>
    )
}

export default Navbar