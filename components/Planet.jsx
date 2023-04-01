import React, {useState, useEffect} from 'react'
import styles from '../styles/Planets.module.css'

export const Planet = ({planet}) => {

const [rings, toggleRings] = useState(null);

  return (
    <div className={styles.planetz}>
    <div className={styles[planet]}>
        <div className={styles.inner}></div>
        <div className={styles.outer}></div>
    </div>
    </div>
  )
}
