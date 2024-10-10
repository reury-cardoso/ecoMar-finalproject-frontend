/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { notify } from "../components/notifications/notifications";

const baseUrl = import.meta.env.VITE_URL_API;

const authEx = {
  headers: {
<<<<<<< HEAD
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTUwMmI5ZmEtYzJlYS00MzY4LWE0ZGUtZWUwOWMxODY5N2NhIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwidXNlcl90eXBlIjoiYWRtaW4iLCJpYXQiOjE3Mjg1NjExNTYsImV4cCI6MTcyODU2NDc1Nn0.gtlwE6dWE1G-9-3b8QRMeFx3Qu-YlxBPJVUCxxqod78`,
=======
    Authorization: `Bearer ${localStorage.getItem('token')}`,
>>>>>>> d6fc6cae7aee429ddac1eb6693ef263e0c563d8b
  }
}

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/api/auth/users`, authEx);
      setUsers(response.data);
    } catch {
      setError("Erro ao buscar usuários.");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (newUser) => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/users`, newUser, authEx);
      setUsers((prev) => [...prev, response.data]);
      fetchUsers();
    } catch {
      setError("Erro ao adicionar usuário.");
    }
  };

  const updateUser = async (id, userUpdated) => {
    try {
      const response = await axios.put(`${baseUrl}/api/auth/users/${id}`, userUpdated, authEx);
      notify("Ponto de coleta atualizado com sucesso!", "success");
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? response.data : user))
      );
      fetchUsers();
    } catch {
      setError("Erro ao atualizar usuário.");
    }
  };

  const deleteUser = async (id) => {
    try {
      console.log(id);
      await axios.delete(`${baseUrl}/api/auth/users/${id}`, authEx);
      notify("Ponto de coleta deletado com sucesso!", "success");
      setUsers((prev) => prev.filter((user) => user.id !== id));
      fetchUsers();
    } catch {
      setError("Erro ao deletar usuário.");
    }
  };

  useEffect(() => {
    notify(error, "error");
  }, [error]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, loading, error, fetchUsers, addUser, updateUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};
