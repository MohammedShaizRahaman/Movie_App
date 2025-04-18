import React, { useState } from 'react'
import { Box, Button, Checkbox, FormLabel, TextField, Typography } from '@mui/material'
import { addMovie } from '../../api-helpers/api-helpers';
const labelProps = {
    mt: 1,
    mb: 1,
}
const AddMovie = () => {
    const[inputs, setInputs] = useState({title:"", description:"", posterurl:"",releasedate:"",featured:false,});
    
    const[actors, setActors] = useState([]);
    const[actor, setActor] = useState();

    
    const handleChange = (e) =>{
        setInputs((prevState) => ({...prevState,[e.target.name]:e.target.value,}))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputs, actors);
        alert("Success fully added")
        addMovie({...inputs,actors }).then((res)=> console.log(res)).catch((err)=>console.log(err));
    };
    return (
    <div>
        
    <form onSubmit={handleSubmit}>
        <Box width={"50%"} padding={10} margin={"auto"}display={"flex"}flexDirection={"column"} boxShadow={"10px 10px 20px #ccc"}>
           <Typography textAlign={"center"} variant='h5' fontFamily={"verdana"}>
            Add New Movie
            </Typography> 
            <FormLabel sx={labelProps}>Title</FormLabel>
            <TextField 
            value={inputs.title} 
            onChange={handleChange}
            name='title' 
            variant='standard'
             margin='normal'/>
            <FormLabel  sx={labelProps}>Description</FormLabel>
            <TextField
             value={inputs.description} 
             onChange={handleChange}
             name='description' 
             variant='standard' 
             margin='normal'/>
            <FormLabel  sx={labelProps}>PosterUrl</FormLabel>
            <TextField  
            value={inputs.posterurl} 
            onChange={handleChange} 
            name='posterurl' 
            variant='standard' 
            margin='normal'/>
            <FormLabel  sx={labelProps}>Release date</FormLabel>
            <TextField 
            type='date' 
            value={inputs.releasedate} 
            onChange={handleChange} 
            name='releasedate' 
            variant='standard' 
            margin='normal'/>
            <FormLabel  sx={labelProps}>Actor</FormLabel>
            <Box display={"flex"}>
            <TextField 
            value={actor}
            name='actor' 
            variant='standard' 
            onChange={(e) => setActor(e.target.value)}
            margin='normal'/>
            <Button onClick={() => 
            {
                setActors([...actors, actor]);
                setActor("");
            }}>
                Add</Button>
            </Box>
            <FormLabel sx={labelProps}>Featured</FormLabel>
            <Checkbox name="featured" checked={inputs.featured} onClick={(e) =>setInputs((prevState)=>({...prevState,featured:e.target.checked}))} sx={{marginRight: "auto"}} />
            <Button type='submit' variant='contained' sx={{width: "30%",margin: "auto", bgcolor: "#2b2d42",":hover":{bgcolor:"#121217"}}}>Add new Movie</Button>
        </Box>
    </form>
    </div>
  )
}

export default AddMovie