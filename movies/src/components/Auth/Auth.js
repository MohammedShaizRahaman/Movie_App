import React from 'react'
import AuthForm from './AuthForm'
import { senduserAuthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onResRecieved = (data) => {
    console.log(data);
    dispatch(userActions.userlogin())
    localStorage.setItem("userId", data.userId);
    navigate("/");
  }
  const getData = (data) =>{
      console.log(data);
      senduserAuthRequest(data.inputs, data.signup)
      .then(onResRecieved)
      .catch(err => console.log(err));
  };
  return (
    <AuthForm onSubmit={getData} isAdmin={false}/>
  );
};

export default Auth


// import React from 'react';
// import AuthForm from './AuthForm';
// import { senduserAuthRequest } from '../../api-helpers/api-helpers';
// import { useDispatch } from 'react-redux';
// import { userActions } from '../../store';

// const Auth = () => {
//   const dispatch = useDispatch();

//   const getData = (data) => {
//     console.log("Data:",data);
//     senduserAuthRequest(data.inputs, data.signup)
//       .then((res) => {
//         console.log("Response:",res);
//         dispatch(userActions.userlogin());
//       })
//       .catch((err) => {
//         console.log(err);
//         // Handle error if needed
//       });
//   };

//   return <AuthForm onSubmit={getData} isAdmin={false} />;
// };

// export default Auth;
