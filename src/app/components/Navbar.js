import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "react";
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/logo.png'
import styles from '../page.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <ul className={styles.brand}>
                    <li>
                        <a href="/">
                            <Image src={logo} className={styles.logo} />
                        </a>
                    </li>

                    <li>
                        <span className={styles.title}>Extracta</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul className={styles.navlinks}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;