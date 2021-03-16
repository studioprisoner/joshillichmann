import '../styles/globals.css'

import siteConfig from '../../site.config';

import Nav from '../components/Nav'

const context = {
  metadata: siteConfig
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Nav />
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
