import Navbar from '@/components/navbar-component/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
        <Navbar/>
        <Component {...pageProps} />
    </div>
  )
}
