import Moon from '@/components/moon'
import { useRouter } from 'next/router'
import React, {useState, useMemo, useEffect} from 'react'
import styles from "../../../styles/Moons.module.css"
const moon = () => {
    const router = useRouter()
    const {planet} = router.query
    const [data, setData] = useState(null);
    const [css,setCss] = useState("opacityZero")

    useMemo(()  =>  {
        fetch(`https://planetz.lol/api/planet/${planet}`)
        .then(response => response.json())
        .then(data => setData(data))
      }, [planet])

      useEffect(() => {
      setCss("animate__animated animate__fadeIn")
      }, [data])
      

  return (
    <>
    <div className={`${styles.moonContainer} ${css}`}>
    {data?.result?.moons?.map(b => (
        <Moon name={b.moonname} radius={b.moonRadiusMi} history={b.moonhistory}/>
    ))}

      {data?.result?.moons.length === 0 ? <p className={styles.noMoons}>{planet.slice(0, 1).toUpperCase() + planet.slice(1)} has no moons!</p> : null }

    </div>
    </>
    
  )
}

export default moon