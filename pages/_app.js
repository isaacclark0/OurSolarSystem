import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps}/>
    <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
  </>
}
