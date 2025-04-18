// import axios from 'axios';
// export const getAllMovies = async() => {
// const res = await axios
// .get("http://localhost:5000/movie")
// .catch((err) => console.log(err));

// if(res.status !== 200){
//     return console.log("No data");
// }
// const data = await res.data;
// return data;
// };

// import axios from 'axios';

// export const getAllMovies = async () => {
//   try {
//     const res = await axios.get("/movie");

//     if (!res || res.status !== 200) {
//       console.log("No data");
//       return null; // or handle the error in some way
//     }

//     const data = res.data;
//     return data;
//   } catch (err) {
//     console.error(err);
//     console.log("Error fetching data");
//     return null; // or handle the error in some way
//   }
// };
// export const senduserAuthRequest = async(data, signup) =>{
//   const res = await axios
//   .post(`/user/${signup?"signup":"login"}`,{
//     name: signup ? data.name: "",
//     email: data.email,
//     password: data.password,
//   }).catch((err) => console.log(err));

//   if(res.status!=200 && res.status !== 201){
//     console.log("Unexpected error occured");
//   }
//   const resdata = await res.data;
//   return resdata;

// }

// export const sendAdminauthRequest = async(data) =>{
//   const res = await axios
//   .post("/admin/login",{
//   email: data.email,
//   password: data.password,
// }).catch((err) => console.log(err));
// if(res.status !== 200){
//   return console.log("Unexpected error");
// }
// const resdata = await res.data;
// return resdata;
// };

//npm install @reduxjs/toolkit

import axios from 'axios';

export const getAllMovies = async () => {
  try {
    const res = await axios.get("/movie");

    if (!res || res.status !== 200) {
      console.log("No data");
      return null; // or handle the error in some way
    }

    const data = res.data;
    return data;
  } catch (err) {
    console.error(err);
    console.log("Error fetching data");
    return null; // or handle the error in some way
  }
};

export const senduserAuthRequest = async (data, signup) => {
  try {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    });

    if (!res || (res.status !== 200 && res.status !== 201)) {
      console.log("Unexpected error occurred");
      return null; // or handle the error in some way
    }

    const resdata = res.data;
    return resdata;
  } catch (err) {
    console.error(err);
    console.log("Error sending user authentication request");
    return null; // or handle the error in some way
  }
};

export const sendAdminauthRequest = async (data) => {
  try {
    const res = await axios.post("/admin/login", {
      email: data.email,
      password: data.password,
    });

    if (!res || res.status !== 200) {
      console.log("Unexpected error");
      return null; // or handle the error in some way
    }

    const resdata = res.data;
    return resdata;
  } catch (err) {
    console.error(err);
    console.log("Error sending admin authentication request");
    return null; // or handle the error in some way
  }
};



export const getMovieDetails = async (id) => {
  try {
    const res = await axios.get(`/movie/${id}`);
    
    if (res.status !== 200) {
      console.log("Unexpected Error occurred");
      return null; // Handle the error case appropriately
    }

    const resdata = await res.data;
    return resdata;
  } catch (err) {
    console.log(err);
    return null; // Handle the error case appropriately
  }
};
// export const newBooking = async(data) =>{
// const res = await axios
//   .post('/booking',{
//     movie: data.movie,
//     seatNumber: data.seatNumber,
//     date: data.date,
//     user: localStorage.getItem("userId"),
//   })
//   .catch((err) => console.log(err));

//   if(res.status !== 201){
//     return console.log("Unexpected error");
//   }
//   const resData = await res.data;
//   return resData;
// };

// export const newBooking = async (bookingData) => {
//   try {
//     const response = await axios.post(`/booking`, bookingData);
    
//     // Check if the 'status' property is defined in the response
//     if (response && response.status) {
//       // Assuming your API returns additional data in the response
//       console.log("Booking response:", response.data);
//       return response.data;
//     } else {
//       console.error("Invalid response structure:", response);
//       throw new Error("Unexpected response structure");
//     }
//   } catch (error) {
//     console.error("Error during booking:", error);
//     throw error; // Re-throw the error to allow the caller to catch it
//   }
// };



// export const newBooking = async (data) => {
//   try {
//     const res = await axios.post("/booking", {
//       movie: data.movie,
//       seatNumber: data.seatNumber,
//       date: data.date,
//       user: localStorage.getItem('userId'),
//     });

//     if (res.status === 201) {
//       const resData = await res.data;
//       return resData;
//     } else {
//       console.error('Unexpected status:', res.status);
//       console.log('Response data:', res.data);
//       return null; // or throw an error based on your application's logic
//     }
//   } catch (err) {
//     console.error('Error:', err);
//     return null; // or throw an error based on your application's logic
//   }
// };

export const newBooking = async (data) => {
  if (!data.movie || !data.seatNumber || !data.date) {
    throw new Error('Invalid request payload. Missing required fields.');
  }
  try {
    const res = await axios.post("/booking",{
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem('userId'),
    });

    if (res.status === 201) {
      const resData = await res.data;
      return resData;
    } else {
      console.error('Unexpected status:', res.status);
      console.log('Response data:', res.data);

      // Throw an error to be caught by the calling code
      throw new Error(`Unexpected status: ${res.status}`);
    }
  } catch (err) {
    // Log the error for debugging purposes
    console.error('Error:', err);

    // Rethrow the error to be caught by the calling code
    throw err;
  }
};


// ====================================================
export const getUserBooking = async() => {
  const id = localStorage.getItem("userId");
  const res = await axios
  .get(`/user/bookings/${id}`)
  .catch(err=>console.log(err));

  if(res.status !== 200){
    return console.log("Unexpected error");
  }
  const resdata = await res.data;
  return resdata;
};
// export const getUserBooking = async () => {
//   try {
//     const id = localStorage.getItem("userId");
//     const res = await axios.get(`/user/bookings/${id}`);
    
//     if (res.status !== 200) {
//       console.log("Unexpected error");
//       return null;  // or handle the error in some way
//     }

//     const bookingData = res.data;

//     // Check if the 'bookings' field is present
//     const bookings = bookingData.bookings || [];

//     // Extract movie titles from bookings
//     const movieTitles = bookings.map(booking => booking.movie.title);

//     return movieTitles;
//   } catch (err) {
//     console.error(err);
//     // Handle the error, return a default value, or rethrow the error as needed
//     return null;  // or handle the error in some way
//   }
// };


// export const getUserBooking = async () => {
//   try {
//     const id = localStorage.getItem("userId");
//     const res = await axios.get(`/user/bookings/${id}`);
    
//     if (res.status !== 200) {
//       console.log("Unexpected error");
//       return null;  // or handle the error in some way
//     }

//     const bookingData = res.data;
//     const userName = bookingData.user.name;  // Access the user's name

//     return userName;
//   } catch (err) {
//     console.error(err);
//     // Handle the error, return a default value, or rethrow the error as needed
//     return null;  // or handle the error in some way
//   }
// };


// export const getUserBooking = async () => {
//   try {
//     const id = localStorage.getItem("userId");
//     const res = await axios.get(`/user/bookings/${id}`);
    
//     if (res.status !== 200) {
//       console.log("Unexpected error");
//       return null;  // or handle the error in some way
//     }

//     const bookingData = res.data;

//     // Check if the 'user' field is present and has a 'name' property
//     const userName = bookingData.user && bookingData.user.name ? bookingData.user.name : 'Unknown';

//     return userName;
//   } catch (err) {
//     console.error(err);
//     // Handle the error, return a default value, or rethrow the error as needed
//     return null;  // or handle the error in some way
//   }
// };

// export const getUserBooking = async () => {
//   try {
//     const id = localStorage.getItem("userId");
//     const res = await axios.get(`/user/bookings/${id}`);

//     if (res.status !== 200) {
//       console.log("Unexpected error");
//       return null; // or handle the error in some way
//     }

//     const bookings = res.data.bookings;

//     if (bookings && bookings.length > 0) {
//       // Assuming the user's name is in the 'name' property of the user field
//       const userName = bookings[0].user.name;
//       return userName;
//     } else {
//       console.log("No bookings found");
//       return null;
//     }
//   } catch (err) {
//     console.error(err);
//     // Handle the error, return a default value, or rethrow the error as needed
//     return null; // or handle the error in some way
//   }
// };
// ======================================================
export const deleteBooking = async(id) =>{
  const res = await axios
  .delete(`/booking/${id}`)
  .catch((err) => console.log(err));

  if(res.status !== 200){
    return console.log("Unexpected error");
  }
  const resData = await res.data;
  return resData;
};
// export const deleteBooking = async (id) => {
//   try {
//     const res = await axios.delete(`/bookings/${id}`);

//     if (res.status === 200) {
//       const resData = await res.data;
//       return resData;
//     } else {
//       console.log(`Unexpected status: ${res.status}`);
//       // Handle other status codes if needed
//       return null;
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.log('Booking not found.');
//       // Handle the case where the booking is not found
//     } else {
//       console.error('Error:', error.message);
//       // Handle other errors
//     }
//     return null;
//   }
// };

// export const deleteBooking = async (id) => {
//   try {
//     const res = await axios.delete(`/bookings/${id}`);

//     if (res.status === 200) {
//       const resData = await res.data;
//       return resData;
//     } else {
//       console.log(`Unexpected status: ${res.status}`);
//       // Handle other status codes if needed
//       return null;
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.log('Booking not found.');
//       // Handle the case where the booking is not found
//     } else {
//       console.error('Unexpected Error:', error);
//       // Rethrow the error for unexpected cases
//       throw error;
//     }
//     return null;
//   }
// };
// ================================================
export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios
  .get(`/user/${id}`)
  .catch((err) => console.log(err));
  if(res.status !== 200){
    return console.log("unexpected error")
  }
  const resData = await res.data;
  return resData;
}
// export const getUserDetails = async () => {
//   try {
//     const id = localStorage.getItem("userId");
//     const res = await axios.get(`/user/${id}`);
    
//     if (res.status === 200) {
//       return res.data; // Assuming the user details are in res.data
//     } else {
//       console.log(`Unexpected status: ${res.status}`);
//       return null; // or handle other status codes if needed
//     }
//   } catch (error) {
//     console.error('Error:', error.message);
//     return null; // or handle the error as needed
//   }
// };


// export const getUserDetails = async () => {
//   try {
//     const id = localStorage.getItem("userId");
//     const res = await axios.get(`/user/${id}`);
    
//     if (res.status === 200) {
//       return res.data; // Assuming the user details are in res.data
//     } else {
//       console.log(`Unexpected status: ${res.status}`);
//       return null; // or handle other status codes if needed
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.log('User not found.');
//     } else {
//       console.error('Error:', error.message);
//     }
//     return null; // or handle the error as needed
//   }
// };



// export const getUserDetails = async () => {
//   try {
//     const id = localStorage.getItem("userId");
//     const res = await axios.get(`/user/${id}`);
    
//     if (res.status === 200) {
//       return res.data; // Assuming the user details are in res.data
//     } else {
//       console.log(`Unexpected status: ${res.status}`);
//       return null; // or handle other status codes if needed
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.log('User not found.');
//     } else {
//       console.error('Error:', error.message);
//     }
//     return null; // or handle the error as needed
//   }
// };
//==================================================================================
export const addMovie = async (data) =>{

    const res = await axios.post("/movie",{
      title: data.title,
      description: data.description,
      releaseDate: data.releasedate,
      posterUrl: data.posterurl,
      fetaured: data.fetaured,
      actors: data.actors,
      admin: localStorage.getItem("adminId"),
    },{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
    ).catch((err) => console.log(err));

    if(res.status!==201){
      return console.log("Unexpected error occured");
    }

    const resData = await res.data;
    return resData;
 
};
export const getAdminById = async() =>{
  const adminId = localStorage.getItem("adminId");
  const res = await axios
  .get(`/admin/${adminId}`)
  .catch((err) => console.log(err));

  if(res.status !== 200){
    return console.log("Unexpected error occured");
  }

  const resData = await res.data;
  return resData;
};

// Import Statements:

// You're importing necessary modules from axios and exporting functions that handle API requests related to movies, user authentication, bookings, and user details.

// getAllMovies Function:

// This function makes an HTTP GET request to fetch all movies.
// It handles the response appropriately, returning either the data or null based on the HTTP status.


// senduserAuthRequest and sendAdminauthRequest Functions:

// These functions handle user and admin authentication requests, respectively, by making HTTP POST requests with user/admin credentials.
// They handle responses similarly to getAllMovies, returning either the data or null based on the HTTP status.
// getMovieDetails Function:

// This function fetches details of a specific movie by its ID.
// It handles the response similarly to other functions, returning either the data or null based on the HTTP status.
// newBooking Function:

// This function handles booking requests by making an HTTP POST request with booking details.
// It includes error handling for invalid payloads and unexpected HTTP statuses, throwing errors or returning null appropriately.
// getUserBooking Function:

// This function fetches booking details for a specific user.
// It handles the response similarly to other functions, returning either the data or null based on the HTTP status.
// deleteBooking Function:

// This function handles booking deletion by making an HTTP DELETE request with the booking ID.
// It includes error handling for unexpected HTTP statuses.
// getUserDetails Function:

// This function fetches details of a specific user by their ID.
// It handles the response similarly to other functions, returning either the data or null based on the HTTP status.
// addMovie Function:

// This function handles adding a new movie by making an HTTP POST request with movie details.
// It includes error handling for unexpected HTTP statuses.
// getAdminById Function:

// This function fetches details of a specific admin by their ID.
// It handles the response similarly to other functions, returning either the data or null based on the HTTP status.