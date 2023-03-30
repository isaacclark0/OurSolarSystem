import Image from "next/image"
import React, {useState,useEffect} from "react"

export const Nav = ({path}) => {

    const [leftButton,setLeftButton] = useState(null)
    const [rightButton,setRightButton] = useState(null)

    const logo = (
        <Image src="/android-chrome-192x192.png" width={50} height={50} />
    )

    const backButton = (
        <div className="backButton" onClick={()=>path.back()}><div className="backArrow">&lt;</div> Back</div>
    )

    const setIndex = () => {
        setLeftButton(logo)
        setRightButton(null)
    }

    const setPlanet = () => {
        setLeftButton(backButton)
        setRightButton(null)
    }

    const setMoons = (logo) => {
        
    }

useEffect(() => {
    path.pathname === "/" ? setIndex() :
    path.pathname === "/planet/[planet]" && path.query.planet ? setPlanet() : null


}, [path])


    return <>
    <div className="navContainer">
      <div>{leftButton}</div>
      <div>{rightButton}</div>
    </div>
    </>
}