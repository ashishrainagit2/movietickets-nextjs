import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Home = ({data}) => (

  <div>
	<Layout>
		<div className="MovieInFocus"> Movie in focus</div>
		<div className='main'>
            <h2>Popular Movies</h2>
			<div className='row'>
					
						{data.map((value , i)=>{
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

Home.getInitialProps = async ({req}) => {
	const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c18a8c63bee9d66665a486a624d48177&language=en-US&page=1')
	const json = await res.json()
	console.log(json)
	return {data : json.results}
}



// Home.getInitialProps = async ({req}) => {
// 	const res = await fetch('http://localhost:3000/api/index')
// 	const data = await res.json()
// 	console.log('>>>',(data))
// 	console.log('>>><<<',typeof(data))
// 	return (data)
// }

export default Home
