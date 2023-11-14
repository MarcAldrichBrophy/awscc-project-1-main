import React from "react";
import Image from 'next/image'
import styles from './page.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <a href="/"><Image src="/logo.png" alt="Logo" width={75} height={60}/></a>
                <h1 className={styles.logoTitle}>Extracta</h1>
            </div>
            <nav className={styles.nav}>
                <a href="/" className={styles.navItem}>Home</a>
                <a href="/about" className={styles.navItem}>About</a>
                <a href="/services" className={styles.navButton}>Services</a>
            </nav>
        </div>
    )
}
export default Navbar;