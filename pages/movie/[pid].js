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
                    <div>
                        <img src={"https://image.tmdb.org/t/p/w1280/" + data.backdrop_path} />
                    </div>
                    <div className="detailsHolder">
                        {data.original_title}
                    </div> 
                </div>
            </Layout>
            <style jsx>{`
            .main {
                marign :10px;
                border:1px solid grey;
                color:white;
                width: 90%;
                margin: 10px auto;
            }
            .MovieInFocus {
                display: none;
            }
            .detailsHolder {
                text-align : center;
                width: 100%;
            }
            `}</style>
            <style global>{`
                li:first-child {
                    display:none;
                }    
            `}</style>
        </div>
    )
}

Home.getInitialProps = async ({query, pathname, asPath, req , res ,jsonPageRes,err}) => {
    console.log("1.query", query);
    console.log("2.pathname", pathname);
    console.log("3.asPath", asPath);
    console.log("4.req", req);
    console.log("5.res", res);
    console.log("6.jsonPageRes", jsonPageRes);
    console.log("7.err", err);

    const url = "https://api.themoviedb.org/3/movie/" + query.pid + "?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US";
	const response = await fetch(url)
	const json = await response.json()
	return {data : json}
}


export default Home