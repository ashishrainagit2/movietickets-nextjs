import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import MovieOnTopCard from '../components/MovieOnTopCard'

const playHandler = () => {
   document.getElementById('trailerWrapper').style.display = 'block';
   document.getElementById('posterCard').style.display = 'none';
}

const Home = ({movieDataResults, tvDataResults, MovieOnTop }) => {
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
		<div className="MovieInFocus"> 
                    <div id="posterCard">
                        <MovieOnTopCard   posterImg={MovieOnTop['poster_path']}/>
                    </div>
                    <div className="trailerWrapper" id="trailerWrapper">
                        <iframe width="100%" height="543" src="https://www.youtube.com/embed/FHxhr6KAaUw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
            <div className="MovieInFocusDetailsWrapper">
                    <div className="MovieOnTopTitleWrapper">  
                        {MovieOnTop['original_title']}
                    </div>
                    <div>
                        {MovieOnTop['overview']}
                    </div>
                    <div>
                        <button onClick={playHandler}>Play</button>
                        <button>MyList</button>
                        <button>More Info</button>
                    </div>
            </div>
        </div>
		<div className='main'>
            <h2>Popular Movies</h2>
			<div className='row'>
                <div className="cardCarosel">
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
		</div>
        <br /><br />
        <div className='main'>
            <h2>Popular Shows</h2>
			<div className='row'>
                <div className="cardCarosel">
						{tvDataResults.map((value , i)=>{
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
		</div>

    	<div className="pagination">
    		<span>1</span>
    	</div>
	</Layout>

    <style jsx>{`
	.main {
		marign :10px;
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
        text-align: center;
        margin: 0 auto;
        max-height: 600px;
      }
      .MovieInFocusDetailsWrapper {
          position: relative;
          top: -500px;
          color: white;
          width: 600px;
          text-align: left;
          left: 60px;
          line-height: 25px;
      }
      .MovieOnTopTitleWrapper {
          font-size: 36px;
          font-weight: bold;
          margin: 10px 0px;
      }

      .MovieInFocusDetailsWrapper button {
          width : 100px;
          padding: 10px;
          margin: 10px;
          border-radius : 5px;
      }
      .trailerWrapper {
          display : none;
      }
      .cardCarosel {
          width : 6020px;
          padding: 10px;
      }
    `}</style>
    <style global>{`
        * {
            box-sizing : border-box;
        }
        body {
            background: #141414;
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

    const [movieData, tvData,MovieOnTop] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1`).then(r => r.json()),
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`).then(r => r.json()),
        fetch(`https://api.themoviedb.org/3/movie/508965?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US`).then(r => r.json())
      ]);
   
    return {
        movieDataResults : movieData.results,
        tvDataResults : tvData.results,
        MovieOnTop : MovieOnTop
    }
}

export default Home
