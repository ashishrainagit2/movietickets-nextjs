import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'


const Home = ({movieDataResults}) => {
{console.log("ashish" , typeof({movieDataResults}))  //object
console.log("ashish2" , {movieDataResults}) //objects.movieData is an array of objects

// { movieData: 
//     [ { popularity: 441.229,
//         vote_count: 5591,
//         video: false,
//         poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
//         id: 475557}]
// }
}
return (
  <div>
      <Head>
        <title>Movie List</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
	<Layout>
		<div className="MovieInFocus"> Movie in focus</div>
		<div className='main'>
            <h2>Popular Movies</h2>
			<div className='row'>
						{movieDataResults.map((value , i)=>{
							return (
								<div className="movieWrapper">
                                    <div className="displayUnit">
                                        
                                        <Link href="/movie/[pid]" as={{pathname: "/movie/" + value.id , query : {name : 'fordemo'}}} prefetch={false} passHref>
                                            <div>
                                                <img src={"https://image.tmdb.org/t/p/w300/" + value.poster_path} alt="Movie Image"/>
                                            </div>
                                        </Link>
                                    </div>
								</div>
							)
						})}
								
			</div>
		</div>
    	<div className="pagination">
    		<span>1</span>
    	</div>
	</Layout>

    <style jsx>{`
	.main {
		marign :10px;
        text-align:  center;
        color: white;
	}
	.movieWrapper {
		display: inline-block;
		vertical-align: top;
		border: 1px solid grey;
		min-height: 300px;
		overfllow: scroll;
		text-align: center;
		background: black;
        min-height: 473px;
        width:300px;
        position: relative;
      }
    .displayUnit {
        
    }
      .row{
          width: 100%;
          overflow: scroll;
          position: relative;
      }
  	.name {
		color: white;
		text-decoration : none;
  	}
  	.pagination{
		color: white;
		width: 90%;
		text-align: center;
  	}
  	.MovieInFocus {
		min-height : 500px;
  	}
    `}</style>
    <style global>{`
        * {
            box-sizing : border-box;
        }
    `}</style>
  </div>
    )
}

// Home.getInitialProps = async ({req}) => {
// 	const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1')
// 	const json = await res.json()
//     console.log("ashish123" , typeof(json)) //object
//     console.log(json)  
//     // { page: 1,
//     //     total_results: 10000,
//     //     total_pages: 500
//     // }
// 	return {movieData : json.results}
// }

Home.getInitialProps = async ({req}) => {

    const [movieData, tvData] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1`).then(r => r.json()),
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`).then(r => r.json())
      ]);
	console.log("ab", typeof(movieData))
    console.log("abc" , (movieData))
   
    return {
        movieDataResults : movieData.results,
        tvDataResults : tvData.results
    }
}


export default Home
