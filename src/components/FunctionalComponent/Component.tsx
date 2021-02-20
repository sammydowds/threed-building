import * as React from 'react'
import styles from './Component.module.css'

interface Props {
    componentProp: boolean;
}

export function ComponentName(props: Props) {
    return (
        <div className={styles.navbar}>Standard Functional Component</div>
    ); 
}