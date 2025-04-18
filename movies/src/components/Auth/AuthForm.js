import {Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
const labelStyle = {mt:1, mb: 1}
const AuthForm = ({onSubmit, isAdmin}) => {
  const[inputs, setInputs] = useState({
    name:"",
    email:"",
    password:"",
  });
  const[IsSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    onSubmit({inputs, signup: isAdmin ? false : IsSignup});
  };
  return (
    <Dialog PaperProps={{style: {borderRadius: 20}}} open={true}>
      <Box sx={{m1:"auto", padding: 1, marginLeft: 'auto'}}>
        <IconButton LinkComponent={Link} to='/'>
          <CloseRoundedIcon/>
        </IconButton>
      </Box>
        <Typography variant='h4' textAlign="center">
        {IsSignup ? "Signup" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display={'flex'} 
          justifyContent={'center'} 
          flexDirection="column" 
          width={400} 
          margin={"auto"} 
          alignItems={"center"} 
          padding={6}>
             { !isAdmin && IsSignup && (
             <> 
              <FormLabel sx={labelStyle}>Name</FormLabel>
                <TextField 
                  value={inputs.name}
                  onChange={(handleChange)}
                  margin='normal' 
                  variant='standard' 
                  type={"text"} 
                  name='name'
                />
          </>
         )}
          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField 
          value={inputs.email}
          onChange={(handleChange)}
          margin='normal' 
          variant='standard' 
          type={"email"} 
          name='email'/>
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField  
          value={inputs.password}
          onChange={(handleChange)}
          margin='normal' 
          variant='standard' 
          type={"password"} 
          name='password'/>
          <Button sx={{mt:2, borderRadius: 10, bgcolor:"#2b2d42"}} type='submit'fullWidth variant='contained'>{IsSignup ? "Signup" : "Login"}</Button>
         { !isAdmin && (
         <Button 
          onClick={() => setIsSignup(!IsSignup)} 
          sx={{mt:2, borderRadius: 10, }} 
          fullWidth >Switch To {IsSignup ? "Login" : "Signup"}
          </Button>
          )}

          </Box>
        </form>
    </Dialog>
  )
}

export default AuthForm;