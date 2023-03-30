import React, {useEffect} from "react"
import styles from "../styles/Index.module.css"

export const HoverDisplay = ({display}) => {
    return <h1 className={styles.hoverDisplay}>{display}</h1>
}