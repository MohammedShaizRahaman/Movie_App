import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Moviesitem = ({title, releaseDate,posterUrl,id}) => {
  return (
    <Card sx={{ 
        margin: 2,
        width: 200, 
        height: 320, 
        borderRadius: 5, 
        "&hover":{
        boxShadow: "10px 10px 20px #ccc",

    }, 
    }}
    >
    <img height={'50%'} width="100%" src={posterUrl} alt={ title }/>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' fullWidth  LinkComponent={Link} to={`/booking/${id}`} sx={ {margin: "auto", bgcolor: "2b2d42" ,":hover":{bgcolor:"#121217"}}}
         size="small" >
          Book
          </Button>
      </CardActions>
    </Card>
  );
}

export default Moviesitem