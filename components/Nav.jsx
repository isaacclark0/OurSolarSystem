import Image from "next/image"
import Link from "next/link"
import React, {useState,useEffect} from "react"

export const Nav = ({path}) => {

    const [leftButton,setLeftButton] = useState(null)
    const [rightButton,setRightButton] = useState(null)

    const planet = path.query.planet ?? null

    const logo = (
        <Image src="/android-chrome-192x192.png" width={50} height={50} />
    )

    const backButton = (
        <div className="backButton" onClick={()=>path.back()}><div className="backArrow">&lt;</div> Back</div>
    )

    const moonsButton = (
        <Link href={`/planet/${planet}/moon-info`}>
        <div className="moonButton">Moons <div className="forwardArrow">&gt;</div></div>
        </Link>
    )

    const setIndex = () => {
        setLeftButton(logo)
        setRightButton(null)
    }

    const setPlanet = () => {
        setLeftButton(backButton)
        setRightButton(moonsButton)
    }

    const setMoons = () => {
        setLeftButton(backButton)
        setRightButton(null)
    }

useEffect(() => {
    path.pathname === "/" ? setIndex() :
    path.pathname === "/planet/[planet]" && path.query.planet ? setPlanet() :
    path.pathname === "/planet/[planet]/moon-info" && path.query.planet ? setMoons() : null
}, [path])


    return <>
    <div className="navContainer">
      <div>{leftButton}</div>
      <div>{rightButton}</div>
    </div>
    </>
}