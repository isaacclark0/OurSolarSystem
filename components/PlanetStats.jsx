import styles from "../styles/PlanetsStats.module.css"

export const PlanetStats = ({planet, data}) => {

    return <>
    <div className={styles.pContainer}>
    <h2>{planet}</h2>
    <div className={styles.planetInfo}>

        {/* <hr className="measurement"/> (Calculate With Radius) */}
        <h4>Radius: {data?.result?.planetRadiusMi.toLocaleString()} Miles</h4>

        <h4>Planet Type: {data?.result?.planetType === 'InnerRocky' ? 'Inner Rocky' :
         data?.result?.planetType === 'GasGiant' ? 'Gas Giant' : 
         data?.result?.planetType === 'IceGiant' ? 'Ice Giant' : 
         data?.result?.planetType}</h4>

        <h4>{data?.result?.distanceFromSunMi.toLocaleString()} miles from Sun</h4>

    </div>
    <div className={styles.row}>
        {data?.result?.facts.map(b => (
            <div className={styles.factContainer}>
                <p>{b.fact}</p>
            </div>
        ))}
    </div>
    
    {/*Moons
    <div className={styles.row}>
        {data?.result?.moons.map(b => (
            <div className={styles.column}>
                <h1>{b.moonname}</h1>
                <b>{b.moonRadiusMi} Mile Radius</b>
                <p>{b.moonhistory}</p>
            </div>
        ))}
    </div>*/}

</div>
    </>
}