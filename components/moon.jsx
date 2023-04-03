import React, {useState} from 'react'
import styles from "../styles/Moons.module.css"

const moon = ({name, radius, history}) => {

  const front = (
    <div><h1>{name}</h1><img className={styles.moonImg} src="/images/moon.png" alt="Moon"></img><h4>Radius: {radius} Miles</h4></div>
  )
  
  const back = (
    <div><p>{history}</p></div>
  )

const [side,setSide] = useState(front);
const [css,setCss] = useState("");
const [flipped,flip] = useState(true)

const flipIt = () => {
  if (flipped === true){
    flip(false)
    setCss("animate__animated animate__zoomOut animate__faster")
    setTimeout(() => {
      setSide(back)
      setCss("animate__animated animate__zoomIn animate__faster")
    }, "420");
  }

  if (flipped === false){
    flip(true)
    setCss("animate__animated animate__zoomOut animate__faster")
    setTimeout(() => {
      setSide(front)
      setCss("animate__animated animate__zoomIn animate__faster")
    }, "420");
  }


}

  return (
    <div onClick={()=>flipIt()} key={Math.random()} className={`${styles.moonCard} ${css}`}>
      {side}
    </div>
  )
}

export default moon