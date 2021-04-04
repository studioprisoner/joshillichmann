import '../styles/globals.css'

import siteConfig from '../../site.config';

import Nav from '../components/Nav'

const context = {
  metadata: siteConfig
}

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto">
      <div className="max-w-4xl mx-auto">
        <Nav />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
