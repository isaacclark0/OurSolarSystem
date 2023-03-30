import { Planet } from "@/components/Planet"
import { PlanetStats } from "@/components/PlanetStats"
import { useRouter } from 'next/router'
import React, {useState, useMemo} from 'react'
import Link from "next/link"

export default function planet({path}) {

  const router = useRouter()
 

  const {planet} = router.query
  const [data, setData] = useState(null);
  
{/*fix this if you please, seems to load slow */}
  useMemo(()  =>  {
    fetch(`http://localhost:3000/api/planet/${planet}`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [planet])

    return (
    <>
    <div className="moonb">
      {data?.result?.moons.length == 0 ? null :
      <div className="moonButton" onClick={()=>path}>
        {data?.result?.moons.length > 1 ? 'Moons ' : 'Moon '}
        <div className="backArrow"> &gt;</div>
      </div>} 
    </div>
      <div className="container">
        <Planet planet={planet} />
        <PlanetStats planet={planet} data={data}/>
      </div>
    </>
    )

  }