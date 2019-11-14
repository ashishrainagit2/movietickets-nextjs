import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import Link from 'next/link'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
    </Head>

    <Nav />

    <div className='main'>
		<div className='row'>
			<div>
				<p>This is no movie</p>
			</div>			
		</div>
    </div>

    <style jsx>{`
	.main {
		marign :10px;
		border:1px solid grey;
	}
    `}</style>
  </div>
)

export default Home
