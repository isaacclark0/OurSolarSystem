import { Planet } from "@/components/Planet"
import { PlanetStats } from "@/components/PlanetStats"
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { useSwipeable } from 'react-swipeable';

export default function planet({data}) {

  const router = useRouter()

  const {planet} = router.query

  const planetArray = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto"
  ]
  
  const [position, setPosition] = useState({
    previous:null,
    current:null,
    next:null
  })
  
  const nextPlanet = () => {
    if (position.current !== 8) {
    setCss1("animate__animated animate__slideOutLeft animate__faster")

      router.push(`${planetArray[position.next]}`)

    setTimeout(() => {
      setCss1("animate__animated animate__slideInRight animate__faster")
    }, "500");
  }
  }
  
  const previousPlanet = () => {
    if (position.current !== 0) {
      setCss1("animate__animated animate__slideOutRight animate__faster")

        router.push(`${planetArray[position.previous]}`)

      setTimeout(() => {
        setCss1("animate__animated animate__slideInLeft animate__faster")
      }, "500");
    } 
  }
  
  const handlers = useSwipeable({
    onSwipedRight: (eventData) => previousPlanet(),
    onSwipedLeft: (eventData) => nextPlanet()
  });

  useEffect(() => {
    let current;
    switch (planet) {
      case "mercury":
        current = 0;
          break;
      case "venus":
        current = 1;
          break;
      case "earth":
        current = 2;
          break;
      case "mars":
        current = 3;
          break;
      case "jupiter":
        current = 4;
          break;
      case "saturn":
        current = 5;
          break;
      case "uranus":
        current = 6;
          break;
      case "neptune":
        current = 7;
          break;
      case "pluto":
        current = 8;
          break;
  }
  if (!isNaN(current)) {
    setPosition({
      previous:current-1,
      current:current,
      next:current+1
    })
  }
  }, [planet])

const [css1, setCss1] = useState("")
const [css2, setCss2] = useState("opacityZero")

useEffect(() => {
  setCss2("container")
  setCss1("animate__animated animate__fadeIn")
}, [])



    return (
    <>
      <div {...handlers} className={`${css1} ${css2}`}>
        <div onClick={()=>previousPlanet()} className="leftySwipe">&lt;</div>
        <div onClick={()=>nextPlanet()}className="rightySwipe">&gt;</div>
        <Planet planet={planet} />
        <PlanetStats planet={planet} data={data}/>
      </div>
    </>
    )

  }

export const getStaticPaths = async () => {

    return {
        paths: [], 
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {

  const res = await fetch(`http://planetz.lol/api/planet/${params.planet}`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}