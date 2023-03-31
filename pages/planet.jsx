import UniqueFacts from "../components/UniqueFacts"

export default function About() {
    return (
    <>
    <div className="planet">
        <div id="planetIcon"></div>
        <h2>Earth</h2>

        <div className="planetInfo">
            <div></div>
            <h4>Size:________</h4>
            <h4>The Core of Earth is: ______</h4>
            <h4>Distance from the Sun: _____</h4>
        </div>

        <UniqueFacts />

    </div>

    </>
    )

  }
