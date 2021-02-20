import * as React from 'react'
import styles from './Navbar.module.css'

interface Props {
    loggedIn: boolean;
}

export function Navbar(props: Props) {
    return (
        <div className={styles.navbar}>Navbar here</div>
    ); 
}