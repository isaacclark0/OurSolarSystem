import Head from "next/head";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import '@/styles/globals.css'
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }) {

  const router = useRouter()

  const titlePrefix = "PLANETZ.LOL | "
  const [title,setTitle] = useState("PLANETZ.LOL");

useEffect(() => {
  router.pathname === "/" ? setTitle(titlePrefix + "Solar System") :
  router.pathname === "/planet/[planet]" && router.query.planet ? setTitle(titlePrefix + router.query.planet.slice(0, 1).toUpperCase() + router.query.planet.slice(1)) : setTitle("PLANETZ.LOL")
}, [router])

  return <>
    <Head>
      <title>
        {title}
      </title>
      <meta name="description" content="Quckathon planet challenge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Nav path={router}/>
    <Component path={router} {...pageProps} />
    <Footer/>
    <div className="starConatin">
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    </div>
  </>
}
