
import Booking from "../models/Booking.js";
import Movie from "../models/Movie.js";
import User from "../models/User.js";
import mongoose from "mongoose";

// export const newBooking = async (req, res, next) => {
//     const { movie, date, seatNumber, user } = req.body;
//     if (!movie) {
//         return res.status(400).json({ error: 'Movie is required for booking' });
//       }
//     let existingMovie;
//     let existingUser;
//     let booking;
//     const session = await mongoose.startSession(); // Corrected

//     try {
//         await session.withTransaction(async () => {
//             existingMovie = await Movie.findById(movie);
//             existingUser = await User.findById(user);

//             if (!existingMovie) {
//                 return res.status(404).json({ message: "Movie not found with given id" });
//             }

//             if (!existingUser) {
//                 return res.status(404).json({ message: "User not found with given id" });
//             }
         

//             booking = new Booking({
//                 movie,
//                 date: new Date(date),
//                 seatNumber,
//                 user,
//             });

//             existingUser.bookings.push(booking);
//             existingMovie.bookings.push(booking);

//             await existingUser.save();
//             await existingMovie.save();
//             await booking.save();
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Unable to create a booking" });
//     } finally {
//         session.endSession();
//     }

//     return res.status(201).json({
//         message: "Booking created successfully",
//         booking,
        
//     });
// };
// export const newBooking = async (req, res, next) => {
//     const { movie, date, seatNumber, user } = req.body;

//     if (!movie) {
//         return res.status(400).json({ error: 'Movie is required for booking' });
//     }

//     let existingMovie;
//     let existingUser;
//     let booking;
//     const session = await mongoose.startSession(); // Corrected

//     try {
//         await session.withTransaction(async () => {
//             existingMovie = await Movie.findById(movie);
//             existingUser = await User.findById(user);

//             if (!existingMovie) {
//                 res.status(404).json({ message: "Movie not found with the given id" });
//                 return;  // Ensure to return after sending a response
//             }

//             if (!existingUser) {
//                 res.status(404).json({ message: "User not found with the given id" });
//                 return;  // Ensure to return after sending a response
//             }

//             booking = new Booking({
//                 movie,
//                 date: new Date(date),
//                 seatNumber,
//                 user,
//             });

//             existingUser.bookings.push(booking);
//             existingMovie.bookings.push(booking);

//             await existingUser.save();
//             await existingMovie.save();
//             await booking.save();
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Unable to create a booking" });
//     } finally {
//         session.endSession();
//     }

//     return res.status(201).json({
//         message: "Booking created successfully",
//         booking,
//     });
// };
// export const newBooking = async (req, res, next) => {
//     const { movie, date, seatNumber, user } = req.body;

//     if (!movie) {
//         return res.status(400).json({ error: 'Movie is required for booking' });
//     }

//     let existingMovie;
//     let existingUser;
//     let booking;
//     const session = await mongoose.startSession(); // Corrected

//     try {
//         await session.withTransaction(async () => {
//             existingMovie = await Movie.findById(movie);
//             existingUser = await User.findById(user);

//             if (!existingMovie) {
//                return res.status(404).json({ message: "Movie not found with the given id" });
//                  // Ensure to return after sending a response
//             }

//             if (!existingUser) {
//                 return res.status(404).json({ message: "User not found with the given id" });
//                  // Ensure to return after sending a response
//             }

//             booking = new Booking({
//                 movie,
//                 date: new Date(date),
//                 seatNumber,
//                 user,
//             });

//             existingUser.bookings.push(booking);
//             existingMovie.bookings.push(booking);

//             await existingUser.save();
//             await existingMovie.save();
//             await booking.save();
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Unable to create a booking" });
//     } finally {
//         session.endSession();
//     }

//     // Check if booking is defined before accessing its properties
//     if (!booking || !booking._id) {
//         return res.status(500).json({ message: "Unable to create a booking" });
//     }

//     return res.status(201).json({
//         message: "Booking created successfully",
//         booking: {
//             _id: booking._id,
//             // Add other properties as needed
//         },
//     });
// };
// export const newBooking = async (req, res, next) => {
//     const { movie, date, seatNumber, user } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(user)) {
//         return res.status(400).json({ error: 'Invalid user ID' });
//     }

//     if (!movie) {
//         return res.status(400).json({ error: 'Movie is required for booking' });
//     }

//     let existingMovie;
//     let existingUser;
//     let booking;
//     const session = await mongoose.startSession();

//     try {
//         await session.withTransaction(async () => {
//             existingMovie = await Movie.findById(movie);
//             existingUser = await User.findById(user);

//             if (!existingMovie) {
//                 res.status(404).json({ message: "Movie not found with the given id" });
//                 return;             }

//             if (!existingUser) {
//                 res.status(404).json({ message: "User not found with the given id" });
//                 return;             }

//             booking = new Booking({
//                 movie,
//                 date: new Date(date),
//                 seatNumber,
//                 user,
//             });

//             existingUser.bookings.push(booking);
//             existingMovie.bookings.push(booking);

//             await existingUser.save();
//             await existingMovie.save();
//             await booking.save();


//           });

//            booking = await Booking.findById(booking._id).populate('user').populate('movie');


//         if (res.headersSent) return;
//         return res.status(201).json({
//             message: "Booking created successfully",
//             booking,
//         });
//     } catch (error) {
//         console.error(error);
//         if (!res.headersSent) {
//             return res.status(500).json({ message: "Unable to create a booking" });
//         }  } finally {
//         session.endSession();
//     }
// };
export const newBooking = async (req, res, next) => {
    const { movie, date, seatNumber, user } = req.body;

    if (!mongoose.Types.ObjectId.isValid(user)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    if (!movie) {
        return res.status(400).json({ error: 'Movie is required for booking' });
    }

    let existingMovie;
    let existingUser;
    let booking;
    const session = await mongoose.startSession();

    try {
        await session.withTransaction(async () => {
            existingMovie = await Movie.findById(movie);
            existingUser = await User.findById(user);

            if (!existingMovie) {
                res.status(404).json({ message: "Movie not found with the given id" });
                return;             }

            if (!existingUser) {
                res.status(404).json({ message: "User not found with the given id" });
                return;             }

            booking = new Booking({
                movie,
                date: new Date(date),
                seatNumber,
                user,
            });

            existingUser.bookings.push(booking);
            existingMovie.bookings.push(booking);

            await existingUser.save();
            await existingMovie.save();
            await booking.populate('user');
            // await booking.populate('movie');
            await booking.save();


          });

           booking = await Booking.findById(booking._id).populate('user');


        if (res.headersSent) return;
        return res.status(201).json({
            message: "Booking created successfully",
            booking,
        });
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            return res.status(500).json({ message: "Unable to create a booking" });
        }  } finally {
        session.endSession();
    }
};


export const getBookingById = async(req, res, next) =>{
    const id = req.params.id;
    let booking;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid booking ID' });
        }

        booking = await Booking.findById(id)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Unexpected error while fetching booking' });
  
    }
    if(!booking){
        return res.status(404).json({ message: 'Booking not found' });
        }
    return res.status(200).json({booking});
};
// export const deleteBooking = async(req, res, next)=>{
//     const id = req.params.id;
//     let booking;
//     try {
//         booking =  await Booking.findByIdAndDelete(id).populate("user movie");
//         console.log(booking);
//         const session = await mongoose.startSession();
//         session.startTransaction();
//         await booking.user.bookings.pull(booking);
//         await booking.movie.bookings.pull(booking);
//         await booking.movie.save({session});
//         await booking.user.save({session});
//         session.commitTransaction();
          
//     } catch (error) {
//         return console.log(error)
//     }
//     if(!booking){
//         return res.status(500).json({message: "unable to delete"})
//     }
//     return res.status(200).json({message: "Successfully deleted"});
// };

export const deleteBooking = async (req, res, next) => {
    const id = req.params.id;
    let booking;

    try {
        booking = await Booking.findByIdAndDelete(id).populate("user movie");

        if (!booking) {
            return res.status(404).json({ message: "Booking not found with given id" });
        }

        const session = await mongoose.startSession();
        session.startTransaction();

        // Remove the booking from the user and movie
        await booking.user.bookings.pull(booking);
        await booking.movie.bookings.pull(booking);

        // Save the changes to the user and movie
        await booking.user.save({ session });
        await booking.movie.save({ session });

        await session.commitTransaction();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Unable to delete the booking" });
    }

    return res.status(200).json({ message: "Booking successfully deleted", deletedBooking: booking });
};

