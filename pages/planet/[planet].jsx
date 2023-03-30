import { Planet } from "@/components/Planet"
import { PlanetStats } from "@/components/PlanetStats"
import { useRouter } from 'next/router'
import React, {useState, useMemo} from 'react'

export default function planet() {

  const router = useRouter()

  const {planet} = router.query
  const [data, setData] = useState(null);
  
{/*fix this if you please, seems to load slow */}
  useMemo(()  =>  {
    fetch(`http://localhost:3001/api/planet/${planet}`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [planet])

    return (
    <div className="container">
    <Planet planet={planet} />
    <PlanetStats planet={planet} data={data}/>
    </div>
    )

  }