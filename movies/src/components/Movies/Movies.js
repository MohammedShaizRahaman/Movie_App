import React, { useEffect, useState } from 'react'
import {Box, Typography} from '@mui/material';
import { getAllMovies } from '../../api-helpers/api-helpers';
import Moviesitem from './Moviesitem';

const Movies = () => {
    const [movies, setmovies] = useState();
    useEffect(()=> {
        getAllMovies().then((data) => setmovies(data.movies))
        .catch(err=> console.log(err))

    },[])
  return (
    <Box margin={"auto"} marginTop={4}>
        <Typography 
        margin={"auto"}
        variant='h4'
        padding={2}
        width={"40%"} 
        bgcolor={"#900C3F"} 
        color={"white"}   
        textAlign={"center"} 
        
        >All Movies
        </Typography>
        <Box
         width={"100%"} 
         margin={"auto"} 
         marginTop={5}
         display={"flex"} 
         justifyContent={"center"} 
         flexWrap={"wrap"} 
         >
        {movies && movies.map((movies,index) =>
        <Moviesitem 
        key={index} 
        id={movies._id} 
        posterUrl={movies.posterUrl} 
        releaseDate={movies.releaseDate} 
        title={movies.title}/>)}
    </Box>
    </Box>
  )
}

export default Movies