import { Planet } from "@/components/Planet"
import { PlanetStats } from "@/components/PlanetStats"
import { useRouter } from 'next/router'

export default function planet() {

  const router = useRouter()

  const {planet} = router.query

    return (
    <div className="container">
    <Planet planet={planet} />
    <PlanetStats planet={planet} />
    </div>
    )

  }