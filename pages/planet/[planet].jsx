import { Planet } from "@/components/Planet"
import { PlanetStats } from "@/components/PlanetStats"
import { useRouter } from 'next/router'
import React, {useState, useMemo} from 'react'
import Link from "next/link"

export default function planet({data}) {

  const router = useRouter()
 
  const {planet} = router.query
  //const [data, setData] = useState(null);
  
{/*fix this if you please, seems to load slow 
  useMemo(()  =>  {
    fetch(`http://localhost:3000/api/planet/${planet}`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [planet])*/}

    return (
    <>
      <div className="container">
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