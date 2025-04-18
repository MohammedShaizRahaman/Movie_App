import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails, newBooking } from '../../api-helpers/api-helpers';
import { Typography, Box, FormLabel, TextField, Button,CircularProgress } from '@mui/material';

const Bookings = () => {
    const [movie, setMovie] = useState();
    const [inputs, setInputs] = useState({seatNumber: "", date: ""});
    // const [loading, setLoading] = useState(true);
    
    const id = useParams().id;
  console.log(id);
  useEffect(() => {
    getMovieDetails(id)
    .then((res) => setMovie(res.movie))
    .catch((err) => console.log(err));
  },[id]);
//   console.log(movie);
  const handleChange = (e) => {
    setInputs((prevState) => ({...prevState,[e.target.name]: e.target.value}))
  }
//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(inputs);
//     newBooking({...inputs, movie: movie._id}).then((res)=> console.log(res)).catch(err => console.log(err)); 

//   }
// const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Ensure the movie object and its _id property are present
//       if (movie && movie._id) {
//         const bookingData = { ...inputs, movie: movie._id };
//         const res = await newBooking(bookingData);
//         console.log(res);
//       } else {
//         console.error("Movie details or movie ID not available for booking.");
//       }
//     } catch (error) {
//       console.error("Error during booking:", error);
//     }
//   };
  
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await newBooking({ ...inputs, movie: movie._id });
      console.log(result);
      alert("Successfully Booked");
      // Handle the result or update the UI as needed
    } catch (error) {
      console.error('Error during booking:', error);
      // Handle the error or update the UI as needed
    }
  };
  

  return (
    <div>
        {/* {loading && <CircularProgress />} */}
        {movie && <Fragment>
            <Typography padding={3} fontFamily={"fantasy"} variant='h4' textAlign={"center"}>
                Book Tickets Of Movie: {movie.title}
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
                <Box display={"flex"} justifyContent={"column"} flexDirection={"column"} paddingTop={3} width={"50%"} marginRight={"auto"}>
                    <img width={"80%"} height={"300px"} src={movie.posterUrl} alt={movie.title}/>
                    <Box width={"80%"} marginTop={3} padding={2}>
                        <Typography paddingTop={2}>{movie.description}</Typography>
                        <Typography fontWeight={'bold'} marginTop={1}>
                            Starrer:
                            {movie.actors.map((actor) =>  " "+ actor + "")}
                        </Typography>
                        <Typography fontWeight={"bold"} marginTop={1}>
                            Release Date: { new Date(movie.releaseDate).toDateString()}
                        </Typography>
                    </Box>
                </Box>

            <Box width={"50%"} paddingTop={3}>
                <form onSubmit={handleSubmit}>
                    <Box padding={5} margin={"auto"} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Seat Number</FormLabel>
                        <TextField value={inputs.seatNumber} onChange={handleChange} name="seatNumber" type='number' margin='normal' variant='standard'></TextField>

                        <FormLabel>Booking Date</FormLabel>
                        <TextField name="date" type='date' margin='normal' variant='standard' value={inputs.date} onChange={handleChange} ></TextField>
    
                        <Button type='submit' sx={3} >Book Now</Button>
                    </Box>
                </form>
            </Box>
            </Box>
            
            </Fragment>}
    </div>
  )
}

export default Bookings


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getMovieDetails } from '../../api-helpers/api-helpers';

// const Bookings = () => {
//   const [movie, setMovie] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const res = await getMovieDetails(id);
//         setMovie(res);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   console.log(movie);

//   return (
//     <div>
//       {movie ? (
//         <>
//           <h2>{movie.title}</h2>
//           <p>Release Date: {new Date(movie.releaseDate).toDateString()}</p>
//           {/* Add more details as needed */}
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Bookings;

// // ... (imports)

// const Bookings = () => {
//     const [movie, setMovie] = useState();
//     const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [bookingConfirmation, setBookingConfirmation] = useState(null);
  
//     const id = useParams().id;
  
//     useEffect(() => {
//       getMovieDetails(id)
//         .then((res) => setMovie(res.movie))
//         .catch((err) => console.log(err))
//         .finally(() => setLoading(false));
//     }, [id]);
  
//     const handleChange = (e) => {
//       setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const result = await newBooking({ ...inputs, movie: movie._id });
//         console.log(result);
//         setBookingConfirmation("Booking successful!"); // Set confirmation message
//       } catch (error) {
//         console.error('Error during booking:', error);
//         setError("Booking failed. Please try again."); // Set error message
//       }
//     };
  
//     return (
//       <div>
//         {loading && <CircularProgress />}
//         {movie && (
//           <Fragment>
//             {/* ... (existing code) */}
//             <Box width={"50%"} paddingTop={3}>
//               <form onSubmit={handleSubmit}>
//                 <Box padding={5} margin={"auto"} display={"flex"} flexDirection={"column"}>
//                   <FormLabel>Seat Number</FormLabel>
//                   <TextField value={inputs.seatNumber} onChange={handleChange} name="seatNumber" type="number" margin="normal" variant="standard" />
  
//                   <FormLabel>Booking Date</FormLabel>
//                   <TextField name="date" type="date" margin="normal" variant="standard" value={inputs.date} onChange={handleChange} />
  
//                   <Button type="submit" sx={3}>
//                     Book Now
//                   </Button>
//                 </Box>
//               </form>
//             </Box>
//             {error && <Typography color="error">{error}</Typography>}
//             {bookingConfirmation && <Typography color="success">{bookingConfirmation}</Typography>}
//           </Fragment>
//         )}
//       </div>
//     );
//   };
  
//   export default Bookings;
  