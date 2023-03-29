import Head from 'next/head'
import {Planet} from '../components/Planet'

export default function Home() {
  return (
    <>
      <Head>
        <title>Solar System</title>
        <meta name="description" content="Quckathon planet challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>

{/* EXAMPLE */}
      <container>
      <Planet planet="mars" />
      <Planet planet="earth" />
      <Planet planet="mercury" />
      <Planet planet="venus" />
      <Planet planet="jupiter" />
      <Planet planet="saturn" />
      <Planet planet="uranus" />
      <Planet planet="neptune" />
      <Planet planet="pluto" />
      </container>
{/* EXAMPLE */}

    </>
  )
}
