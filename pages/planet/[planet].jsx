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
    <div className="moonb">
      {data?.result?.moons.length == 0 ? null :
      <Link href={`/planet/${planet}/moon-info`} className="moonButton">
        {data?.result?.moons.length > 1 ? 'Moons ' : 'Moon '}
        <div className="rightArrButton"> &nbsp;&gt;</div>
      </Link>} 
    </div>
      <div className="container">
        <Planet planet={planet} />
        <PlanetStats planet={planet} data={data}/>
      </div>
    </>
    )

  }
export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
  // This function gets called at build time
export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts
  const res = await fetch(`http://localhost:3000/api/planet/${params.planet}`)
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}