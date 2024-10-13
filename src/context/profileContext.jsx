/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const baseUrl = import.meta.env.VITE_URL_API;

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  const id = localStorage.getItem('user_id');

  const authEx = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  const getUserInfo = async () => {
    const response = await axios.get(`${baseUrl}/api/users/${id}`, authEx);
    setUserInfo(response.data);
  };

  useEffect(() => {
    if (id) {
      getUserInfo();
    }
  }, [id]);

  return (
    <ProfileContext.Provider value={{ userInfo, getUserInfo, setUserInfo }}>
      {children}
    </ProfileContext.Provider>
  );
};
