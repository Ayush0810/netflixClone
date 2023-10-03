import { useEffect, useState } from 'react'
import Carosel from '../../components/Carosel'
import Navbar from '../../components/Navbar'
import requests from '../../request'
import axios from "axios"
import Row from '../../components/Cards'
function Main() {
  const [movies , setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(()=>{
    axios.get(requests.requestPopular).then((response)=>{
      setMovies(response.data.results)
    })
  
  },[])
  console.log(movie)
  return (
    <div className=' bg-black h-[100vh] min-h-[100vh] w-[100vw]'>
    <Navbar/>
    <Carosel title={movie?.title} image={movie?.backdrop_path} release_date={movie?.release_date} overview={movie?.overview}/>
    <Row title={'Popular Movies'} fetchURL={requests.requestTrending} rowID={1}/>
    <Row title={'Horror Movies'} fetchURL={requests.requestHorror} rowID={2}/>
    <Row title={'Upcoming Movies'} fetchURL={requests.requestUpcoming} rowID={3}/>
    <Row title={'Top Rated Movies'} fetchURL={requests.requestTopRated} rowID={4}/>
    </div>
  )
}

export default Main