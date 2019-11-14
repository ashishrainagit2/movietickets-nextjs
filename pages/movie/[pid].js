import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'

const Home = ({data}) => {

    // useEffect(() => {
    //     const handleRouteChange = url => {
    //       console.log('App is changing to: ', url)
    //     }
      
    //     Router.events.on('routeChangeStart', handleRouteChange)
    //     return () => {
    //       Router.events.off('routeChangeStart', handleRouteChange)
    //     }
    //   }, [])  


    const router = useRouter()
    const { pid } = router.query
    return (
        <div>
            <Layout>
                <div className='main'>
                    Movie : {data.original_title}
                </div>
            </Layout>
            <style jsx>{`
            .main {
            marign :10px;
            border:1px solid grey;
            }
            `}</style>
        </div>
    )
}

Home.getInitialProps = async ({req}) => {
    
	const res = await fetch(`https://api.themoviedb.org/3/movie/333?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US`)
	const json = await res.json()
	console.log(">>>", json)
	return {data : json}
}


export default Home