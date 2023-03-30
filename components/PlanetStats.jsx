import styles from "../styles/PlanetsStats.module.css"

export const PlanetStats = ({planet}) => {

    return <>
    <div className={styles.planet}>

    <h2>{planet}</h2>

    <div className={styles.planetInfo}>
        {/* <hr className="measurement"/> */}
        <h4>Size:________</h4>
        <h4>Core: ______</h4>
        <h4>Distance from Sun: _____</h4>
    </div>

    <div className={styles.row}>
        <div className={styles.column}>
            <p>liquid water</p>
        </div>
        <div className={styles.column}>
             <p>plate tectonics</p>
        </div>
        <div className={styles.column}>
             <p>an atmosphere that shelters it from the worst of the sun's rays.</p>
         </div>
    </div>

</div>
    </>
}