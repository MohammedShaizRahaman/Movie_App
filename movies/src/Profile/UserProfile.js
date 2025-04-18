// import React from 'react'
// import { getUserBooking } from '../api-helpers/api-helpers'
// import { useState, useEffect } from 'react';
// const UserProfile = () => {
//     const [bookings, setbookings] = useState()
//     useEffect(() => {
//         getUserBooking()
//         .then((res) => setbookings(res.bookings))
//         .catch((err) => console.log(err));
//     }, []);
//     console.log(bookings);
//   return (
//     <div>UserProfile</div>
//   )
// }


// import React, { useState, useEffect } from 'react';
// import { getUserBooking } from '../api-helpers/api-helpers';
// import { Box, Typography, } from '@mui/material';
// import { Fragment } from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// const UserProfile = () => {
//   const [bookings, setBookings] = useState();

//   useEffect(() => {
//     getUserBooking()
//       .then((res) => setBookings(res.bookings))
//       .catch((err) => console.log(err));
//   }, []);

//   console.log(bookings );
 

//   return (
//     <Box width={"100%"} display={"flex"}>
//     {bookings && bookings.length > 0 && (
//       <Fragment>
//         <Box
//           width={"30%"}
//           flexDirection={"column"}
//           justifyContent={"center"}
//           alignItems={"center"}
//         >
//           <AccountCircleIcon sx={{ fontSize: "10rem" }} />
//           {bookings.map((booking) => (
//             <Typography
//               key={booking._id} // Make sure to use a unique key for each item in the array
//               padding={1}
//               width={"auto"}
//               textAlign={"center"}
//               border={"1px solid #ccc"}
//               borderRadius={6}
//             >
//               Name: {booking.user && booking.user.name ? booking.user.name : 'Unknown'}
//             </Typography>
//           ))}
//         </Box>
//         <Box width={"70%"}></Box>
//       </Fragment>
//     )}
//   </Box>
//   );
// };

// export default UserProfile;

// import React, { useState, useEffect } from 'react';
// import { getUserBooking } from '../api-helpers/api-helpers';
// import { Box, Typography } from '@mui/material';
// import { Fragment } from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const UserProfile = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     getUserBooking()
//       .then((res) => setBookings(res))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box width={'100%'} display={'flex'}>
//       {bookings && bookings.length > 0 && (
//         <Fragment>
//           <Box
//             width={'30%'}
//             flexDirection={'column'}
//             justifyContent={'center'}
//             alignItems={'center'}
//           >
//             <AccountCircleIcon sx={{ fontSize: '10rem' }} />
//             {bookings.map((booking) => (
//               <Typography
//                 key={booking._id}
//                 padding={1}
//                 width={'auto'}
//                 textAlign={'center'}
//                 border={'1px solid #ccc'}
//                 borderRadius={6}
//                 marginBottom={2}
//               >
//                 Name: {booking.user && booking.user.name ? booking.user.name : 'Unknown'}
//               </Typography>
//             ))}
//           </Box>
//           <Box width={'70%'}></Box>
//         </Fragment>
//       )}
//     </Box>
//   );
// };

// export default UserProfile;

// import React, { useState, useEffect } from 'react';
// import { getUserBooking } from '../api-helpers/api-helpers';
// import { Box, Typography } from '@mui/material';
// import { Fragment } from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const UserProfile = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     getUserBooking()
//       .then((res) => setBookings(Array.isArray(res) ? res : res.bookings || []))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box width={'100%'} display={'flex'}>
//       {bookings.length > 0 && (
//         <Fragment>
//           <Box
//             width={'30%'}
//             flexDirection={'column'}
//             justifyContent={'center'}
//             alignItems={'center'}
//           >
//             <AccountCircleIcon sx={{ fontSize: '10rem' }} />
//             {bookings.map((booking) => (
//               <Typography
//                 key={booking._id}
//                 padding={1}
//                 width={'auto'}
//                 textAlign={'center'}
//                 border={'1px solid #ccc'}
//                 borderRadius={6}
//                 marginBottom={2}
//               >
//                 Name: {booking.user && booking.user.name ? booking.user.name : 'Unknown'}
//               </Typography>
//             ))}
//           </Box>
//           <Box width={'70%'}></Box>
//         </Fragment>
//       )}
//     </Box>
//   );
// };

// export default UserProfile;
import React, { useState, useEffect } from 'react';
import { deleteBooking, getUserBooking, getUserDetails } from '../api-helpers/api-helpers';
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Fragment } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const [user,setUser] = useState([]);
  useEffect(() => {
    getUserBooking()
      .then((res) => setBookings(Array.isArray(res) ? res : res.bookings || []))
      .catch((err) => console.log(err));

    getUserDetails()
    .then((res) => setUser(res.user))
    .catch((err) => console.log(err));
  }, []);
  console.log(bookings)
  const handleDelete = (id) => {
    deleteBooking(id)
    .then((res) => console.log(res))
    .catch(err => console.log(err))
  }
  
  return (
    <Box width={"100%"} display={"flex"}>
     
        <Fragment>
          {" "}
        { user && (
        <Box 
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"30%"}
        padding={3}
         >
            <AccountCircleIcon sx={{fontSize: "10rem", textAlign: "center",ml: 3}}/>
            <Typography padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={6}>
            Name: {user.name}
            </Typography>
            <Typography marginTop={1} padding={1} width={"auto"} textAlign={"center"} border={"1px solid #ccc"} borderRadius={6}>
            Email: {user.email}
            </Typography>
         </Box>
        )}
        {bookings && (<Box width={"70%"} display={"flex"} flexDirection={"column"}>
          <Typography variant='h3' fontFamily={"verdana"} textAlign={"center"} padding={2}>
            Bookings
          </Typography>
          <Box margin={"auto"} display={"flex"} flexDirection={"column"} width={"80%"}>
            <List>
              {bookings.map((bookings, index)=>(
                <ListItem sx={{bgcolor: "#00d386", color: "white", textAlign:"center", margin: 1,}}>
                  <ListItemText sx={{margin:1, width:"auto",textAlign:"left"}}>
                    Movie: {bookings.movie ? bookings.movie.title : "N/A"}
                  </ListItemText>
                  <ListItemText sx={{margin:1, width:"auto",textAlign:"middle"}}>
                    SeatNumber: {bookings.seatNumber}
                  </ListItemText>
                  <ListItemText sx={{margin:1, width:"auto",textAlign:"right"}}>
                   Date : {new Date (bookings.date).toDateString()}
                  </ListItemText>
                  <IconButton onClick={ () =>handleDelete(bookings._id)} color='error'>
                    <DeleteForeverIcon color='red'/>
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>)}
        </Fragment>
   </Box>
  );
};

export default UserProfile;





