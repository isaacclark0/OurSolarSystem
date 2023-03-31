import { Planet } from "@/components/Planet"
import { PlanetStats } from "@/components/PlanetStats"
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { useSwipeable } from 'react-swipeable';
import Link from "next/link";

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
    position.current === 8 ? null : router.push(`${planetArray[position.next]}`)
  }
  
  const previousPlanet = () => {
    position.current === 0 ? null : router.push(`${planetArray[position.previous]}`)
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

    return (
    <>
      <div {...handlers} className="container">
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

  const res = await fetch(`http://localhost:3000/api/planet/${params.planet}`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}