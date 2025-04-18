import React, { useEffect, useState } from 'react'
import {AppBar, Toolbar, Autocomplete, TextField, Tab, Tabs, IconButton} from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system";
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../store';
// const dummyArray = ["PK", "Jawan","Terminator" ]
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const [value, setValue] = useState(0);
    const [movies, setmovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState();
    useEffect(() => { 
      getAllMovies()
      .then((data) => setmovies(data.movies))
      .catch((err) => console.log(err));
    }, []);
    const logout =(isAdmin)=>{
        dispatch(isAdmin ? adminActions.adminlogout():userActions.userlogout() )
        alert("Logged Out Successfully")
    }
    const handleChange = (e, val) =>{
        setSelectedMovie(val);
        const movie = movies.find((m) => m.title === val);
        if(isUserLoggedIn){
            navigate(`/booking/${movie._id}`);
        }
    }
  return (
  <AppBar position="sticky" sx={{bgcolor: "#2b2d42"}}>
    <Toolbar>
        <Box width={"20%"}>
          <IconButton LinkComponent={Link} to="/">
          <MovieIcon/>
          </IconButton>
           
        </Box>
        <Box width={'30%'} margin={"auto"}>
        <Autocomplete
        onChange={handleChange}
        freeSolo
        options={movies && movies.map((option) => option.title)}
        renderInput={(params) => 
        <TextField
        variant='standard'{...params}
          sx={{input: {color:"white"}}}
         label="Search Across movies" />}/>
        </Box>
        <Box display={'flex'}>
            <Tabs textColor='inherit' 
            indicatorColor='secondary'
             value={value} onChange={(e, val)=> setValue(val)}>
                
                <Tab LinkComponent = {Link} to="/" label="Home"/>
                <Tab LinkComponent = {Link} to="/movies" label="Movies"/>
                {!isAdminLoggedIn && !isUserLoggedIn &&
                <> 
                  <Tab LinkComponent = {Link} to="/admin" label="Admin"/>
                  <Tab LinkComponent = {Link} to="/auth" label="Auth"/>        
                </>}
                {isUserLoggedIn && (
                  <>
                  <Tab LinkComponent = {Link} to="/user" label="Profile"/>
                  <Tab onClick ={() =>logout(false) } LinkComponent = {Link} to="/" label="Logout"/>        
               
                  </>
                )}
                 {isAdminLoggedIn && (
                  <>
                  <Tab LinkComponent = {Link} to="/add" label="Add Movie"/>
                  <Tab LinkComponent = {Link} to="/user-admin" label="Profile"/>

                  <Tab onClick ={() =>logout(true)}LinkComponent = {Link} to="/" label="Logout"/>        
               
                  </>
                )}

            </Tabs>

        </Box>
    </Toolbar>
  </AppBar>
)}

export default Header;




// const Header = () => {
//   const dispatch = useDispatch();
//   const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
//   const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

//   const [value, setValue] = useState(0);
//   const [movies, setmovies] = useState([]);
  
//   useEffect(() => { 
//     getAllMovies()
//       .then((data) => setmovies(data.movies))
//       .catch((err) => console.log(err));
//   }, []);

//   const logout = (isAdmin) => {
//     dispatch(isAdmin ? adminActions.adminlogout() : userActions.userlogout());
//   };

//   return (
//     <AppBar position="sticky" sx={{ bgcolor: '#2b2d42' }}>
//       <Toolbar>
//         <Box width={'20%'}>
//           <MovieIcon />
//         </Box>
//         <Box width={'30%'} margin={'auto'}>
//           <Autocomplete
//             freeSolo
//             options={movies && movies.map((option) => option.title)}
//             renderInput={(params) => (
//               <TextField variant="standard" {...params} sx={{ input: { color: 'white' } }} label="Search Across movies" />
//             )}
//           />
//         </Box>
//         <Box display={'flex'}>
//           <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
//             <Link to="/">
//               <Tab label="Home" />
//             </Link>
//             <Link to="/movies">
//               <Tab label="Movies" />
//             </Link>
//             {!isAdminLoggedIn && !isUserLoggedIn && (
//               <>
//                 <Link to="/admin">
//                   <Tab label="Admin" />
//                 </Link>
//                 <Link to="/auth">
//                   <Tab label="Auth" />
//                 </Link>
//               </>
//             )}
//             {isUserLoggedIn && (
//               <>
//                 <Link to="/user">
//                   <Tab label="Profile" />
//                 </Link>
//                 <Tab onClick={() => logout(false)} label="Logout"/>
//               </>
//             )}
//             {isAdminLoggedIn && (
//               <>
//                 <Link to="/add">
//                   <Tab label="Add Movie" />
//                 </Link>
//                 <Link to="/admin">
//                   <Tab label="Profile" />
//                 </Link>
//                 <Tab onClick={() => logout(true)} label="Logout" />
//               </>
//             )}
//           </Tabs>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;