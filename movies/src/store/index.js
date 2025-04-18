import {configureStore, createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {isLoggedIn: false},
    reducers:{
        userlogin(state){
            state.isLoggedIn = true;
        },
        userlogout(state){
            localStorage.removeItem("userId");
            state.isLoggedIn = false;
        },
    },
})

const adminSlice = createSlice({
    name: "auth",
    initialState: {isLoggedIn: false},
    reducers:{
        adminlogin(state){
            state.isLoggedIn = true;
        },
        adminlogout(state){
            localStorage.removeItem("adminId");
            localStorage.removeItem("token");
            state.isLoggedIn = false;
        },
    },
})




export const userActions = userSlice.actions;

export const adminActions = adminSlice.actions;

export const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        admin: adminSlice.reducer,
    },
})