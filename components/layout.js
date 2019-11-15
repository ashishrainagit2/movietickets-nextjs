import Link from 'next/link'
import Head from 'next/head'
import Nav from './nav'
import Footer from './Footer'

export default ({ children, title = 'Movie Info' }) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <header>
        <Nav />
    </header>

    {children}

    <Footer/>
    <style jsx>
      {`
          background: #141414;
      `}
    </style>
  </div>
)