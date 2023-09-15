import '@/styles/globals.css'
// import '@/scss'
// import "../scss/main.scss"; //Earlier
import "@/scss/main.scss"; // Now

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
