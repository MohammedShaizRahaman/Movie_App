import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Moviesitem from './Movies/Moviesitem'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helpers'
const HomePage = () => {
    const [movies, setmovies] = useState([]);
    useEffect(() =>{
        getAllMovies().then((data) => setmovies(data.movies)).catch(err => console.log(err))
    },[]);
  return (
    <Box width={'100%'} height={"100%"} margin={"auto"} marginTop={2}>
        <Box margin={"auto"} width={"80%"} height={"80vh"} padding={2}>
        <img src='https://miro.medium.com/v2/resize:fit:1358/1*Subc1iyVVKLRT-Wolmj_-A.jpeg' alt='jawan' width={'100%'} height={'100%'} />
    </Box>
    <Box padding={5} margin={"auto"}>
        <Typography variant='h4' textAlign={"center"}>Latest Releases</Typography>
    </Box>
    <Box display={'flex'} 
        width={"100%"} 
        justifyContent={"center"} 
        flexWrap={"wrap"}>
        { movies &&  movies.slice(0, 4).map((movie, index) => (
         <Moviesitem id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} key = {index}/>))}
    </Box>
    <Box display={"flex"} padding={5} margin="auto">
        <Button LinkComponent = {Link} to="/movies" variant="outlined" sx={{margin:'auto', color: "#2b2d42"}}>
            View All Movies
        </Button>
    </Box>
    </Box>
  )
}

export default HomePage