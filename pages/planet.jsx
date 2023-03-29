export default function About() {
    return (
    <>
    <div className="planet">
        <div id="planetIcon"></div>
        <h2>Earth</h2>

        <div className="planetInfo ">
            {/* <hr className="measurement"/> */}
            <h4>Size:________</h4>
            <h4>The Core of Earth is: ______</h4>
            <h4>Distance from the Sun: _____</h4>
        </div>

        <div className="row">
            <div className="column">
                <p>liquid water</p>
            </div>
            <div className="column">
                 <p>plate tectonics</p>
            </div>
            <div className="column">
                 <p>an atmosphere that shelters it from the worst of the sun's rays.</p>
             </div>
        </div>

    </div>

    </>
    )

  }