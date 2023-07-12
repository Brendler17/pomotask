import { GlobalProvider } from '../contexts/GlobalContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 