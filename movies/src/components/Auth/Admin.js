import React from 'react'
import AuthForm from './AuthForm'
import { sendAdminauthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onResRecieved = (data)=>{
    console.log(data);
    dispatch(adminActions.adminlogin());
    localStorage.setItem("adminId", data.id)
    localStorage.setItem("token", data.token)
    navigate("/");
  }
  
  const getData = (data) =>{
    console.log("Admin", data);
    sendAdminauthRequest(data.inputs)
    .then(onResRecieved)
    
    .catch(err=> console.log(err));
  }
  return (
    <div><AuthForm onSubmit={getData} isAdmin={true}/></div>
  )
}

// const Admin = () => {
//   const dispatch = useDispatch();

//   const getData = async (data) => {
//     try {
//       console.log("Admin", data);
//       const res = await sendAdminauthRequest(data.inputs);
//       console.log(res);
//       dispatch(adminActions.adminlogin());
//     } catch (err) {
//       console.error('Error sending admin authentication request', err);
//       // Handle error if needed
//     }
//   };

//   return <div><AuthForm onSubmit={getData} isAdmin={true}/></div>;
// };


export default Admin
// Import Statements:

// The component imports necessary modules including React, AuthForm, sendAdminauthRequest function from api-helpers, useDispatch hook from react-redux, and useNavigate hook from react-router-dom.
// Functional Component:

// Admin is a functional component responsible for rendering an authentication form for administrators.
// Hooks:

// It uses the useNavigate hook to access the navigation object, allowing redirection after authentication.
// It uses the useDispatch hook to dispatch actions to the Redux store.
// Event Handlers:

// onResRecieved is a function that handles the response received after sending an admin authentication request. It dispatches an action to update the store upon successful authentication, sets admin related data in local storage, and navigates to the home page.
// getData is a function that is called when the authentication form is submitted. It sends an admin authentication request using the sendAdminauthRequest function, then calls onResRecieved upon receiving a response, and logs any errors to the console.
// Rendering:

// It renders the AuthForm component passing it the getData function as a prop. It sets the prop isAdmin to true to indicate that this is an admin authentication form.
// Commented-out Code:

// There's commented-out code providing an alternative implementation of the Admin component where the authentication request is handled using async/await syntax.
// In an interview, you can explain this component by highlighting:

// Its purpose of handling administrator authentication.
// How it interacts with the API through sendAdminauthRequest to authenticate administrators.
// Usage of React hooks like useDispatch and useNavigate.
// How it dispatches actions to update the Redux store upon successful authentication.
// Error handling strategies implemented to log errors and handle them appropriately.
// The commented-out code showing an alternative implementation using async/await syntax for handling asynchronous operations.



