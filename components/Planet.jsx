import React, {useState, useEffect} from 'react'
import styles from '../styles/Planets.module.css'

export const Planet = ({planet}) => {

const [craters, toggleCraters] = useState(null);
const [rings, toggleRings] = useState(null);
const [northamerica, toggleNorthAmerica] = useState(null)
const [centralamerica, toggleCentralAmerica] = useState(null)
const [southamerica, toggleSouthAmerica] = useState(null)

useEffect(() => {
  planet === "mars" ? toggleCraters("crater") : toggleCraters(null)
}, [planet])

useEffect(() => {
  planet === "saturn" ? toggleRings("ring") : toggleRings(null)
}, [planet])


useEffect(() => {
  const enableEarth = (isEarth) => {
    if(isEarth){
      toggleNorthAmerica("northamerica")
      toggleCentralAmerica("centralamerica")
      toggleSouthAmerica("southamerica")
    } else {
      toggleNorthAmerica(null)
      toggleCentralAmerica(null)
      toggleSouthAmerica(null)
    }
  }
  planet === "earth" ? enableEarth(true) : enableEarth(false)
  }, [planet])


  return (
    <div className={styles.planetz}>
    <div className={styles[planet]}>
        <div className={styles[craters]}/>
        <div className={styles[craters]}/>
        <div className={styles[craters]}/>
        <div className={styles.inner}></div>
        <div className={styles.outer}></div>
        <div className={styles[rings]}/>
        <div className={styles[northamerica]}></div>
        <div className={styles[centralamerica]}></div>
        <div className={styles[southamerica]}></div>
    </div>
    </div>
  )
}
