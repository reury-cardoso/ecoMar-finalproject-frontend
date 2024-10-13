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
    const response = await axios.get(`${baseUrl}/api/auth/users/${id}`, authEx);
    setUserInfo(response.data);
  };

  const updateUserInfo = async (idModal, data) => {
    try {
      await axios.put(`${baseUrl}/api/auth/users/${idModal}`, data, authEx);
      await getUserInfo();
      localStorage.setItem('name', data.name);
    } catch {
      console.log('Erro ao atualizar usuário');
    }
  };

  useEffect(() => {
    if (id) {
      getUserInfo();
    }
  }, [id]);

  return (
    <ProfileContext.Provider value={{ userInfo, getUserInfo, setUserInfo, updateUserInfo }}>
      {children}
    </ProfileContext.Provider>
  );
};
