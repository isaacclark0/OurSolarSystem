import React from 'react'
import styles from "../styles/Moons.module.css"


const moon = ({name, radius, history}) => {
  return (
    <div className={styles.moonCard}>
        <h1>{name}</h1>
        <img className={styles.moonImg} src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/ac0fa22c3bec1cc.png" alt="Moon"></img>
        
        <h4>Radius: {radius} Miles</h4>
    </div>
  )
}

export default moon