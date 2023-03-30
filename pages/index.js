import Head from "next/head";
import Link from 'next/link'
import { HoverDisplay } from "@/components/HoverDisplay";
import React, {useEffect, useState} from 'react'
import styles from '../styles/Index.module.css'

export default function Home() {

const [hoverD, setHoverD] = useState("")

  return (
    <>
      <Head>
        <title>Solar System</title>
        <meta name="description" content="Quckathon planet challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.solarsystem}`}>
        <div className={styles.theAnimation}>
        <div onMouseOver={()=>setHoverD("SOL")} className={`${styles.sun}`}></div>
        <Link href="/planet/mercury">
        <div onMouseOver={()=>setHoverD("Mercury")} onMouseOut={()=>setHoverD("")} className={styles.mercuryOutline}>
          <div className={`${styles.planet} ${styles.mercury}`}></div>
        </div>
        </Link>
        <Link href="/planet/venus">
        <div onMouseOver={()=>setHoverD("Venus")} onMouseOut={()=>setHoverD("")} className={styles.venusOutline}>
          <div className={`${styles.planet} ${styles.venus}`}></div>
        </div>
        </Link>
        <Link href="/planet/earth">
        <div onMouseOver={()=>setHoverD("Earth")} onMouseOut={()=>setHoverD("")} className={styles.earthOutline}>
          <div className={`${styles.planet} ${styles.earth}`}></div>
        </div>
        </Link>
        <Link href="/planet/mars">
        <div onMouseOver={()=>setHoverD("Mars")} onMouseOut={()=>setHoverD("")} className={styles.marsOutline}>
          <div className={`${styles.planet} ${styles.mars}`}></div>
        </div>
        </Link>
        <Link href="/planet/jupiter">
        <div onMouseOver={()=>setHoverD("Jupiter")} onMouseOut={()=>setHoverD("")} className={styles.jupiterOutline}>
          <div className={`${styles.planet} ${styles.jupiter}`}></div>
        </div>
        </Link>
        <Link href="/planet/saturn">
        <div onMouseOver={()=>setHoverD("Saturn")} onMouseOut={()=>setHoverD("")} className={styles.saturnOutline}>
          <div className={`${styles.planet} ${styles.saturn}`}></div>
        </div>
        </Link>
        <Link href="/planet/uranus">
        <div onMouseOver={()=>setHoverD("Uranus")} onMouseOut={()=>setHoverD("")} className={styles.uranusOutline}>
          <div className={`${styles.planet} ${styles.uranus}`}></div>
        </div>
        </Link>
        <Link href="/planet/neptune">
        <div onMouseOver={()=>setHoverD("Neptune")} onMouseOut={()=>setHoverD("")} className={styles.neptuneOutline}>
          <div className={`${styles.planet} ${styles.neptune}`}></div>
        </div>
        </Link>
        </div>
        <p className={styles.selectAPlanet}>Select A Planet</p>
        <HoverDisplay display={hoverD} />
      </div>
    </>
  );
}
