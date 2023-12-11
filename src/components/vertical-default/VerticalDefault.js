import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { authUserData } from '../../backendservices/ApiCalls';

const CustomProvider = createContext();

// Optional: If you are using a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    // Add more cases as needed
    default:
      return state;
  }
};

// Context Provider component
export const MyContextProvider = ({ children }) => {
  const [loginUserData, setLoginUserData] = useState('');
  
  const getUserData = () => {
    authUserData(
      (response) => {
        console.log("response22", response?.data?.user)
        setLoginUserData(response?.data?.data);
      },
      (error) => {
        console.log(error?.response?.data);
      }
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    data: null,
    // Add initial state properties here
  });

  const setData = (newData) => {
    dispatch({ type: 'SET_DATA', payload: newData });
  };

  // Add more functions as needed

  const contextValue = {
    loginUserData,
    state,
    setData,
    // Add functions to context value
  };

  return <CustomProvider.Provider value={contextValue}>{children}</CustomProvider.Provider>;
};

// Custom hook to use the context
export const useMyContext = () => {
  return useContext(CustomProvider);
};
