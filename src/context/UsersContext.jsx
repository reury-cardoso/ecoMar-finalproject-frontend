/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { notify } from "../components/notifications/notifications";

const baseUrl = import.meta.env.VITE_URL_API;

const authEx = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZTkwOTI2MzItOTY5MS00M2EyLTg3N2EtZGU3NzU2ZDJhZTZkIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwidXNlcl90eXBlIjoiYWRtaW4iLCJpYXQiOjE3Mjg0ODE0NTksImV4cCI6MTcyODQ4NTA1OX0.SNBTlVth4a285Vd6lIjKzqpTKYF3ODaZcNtg58TZtSI`,
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
      setError("Erro ao buscar ponto de coleta.");
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
      notify("Erro ao adicionar ponto de coleta.", "error");
      setError("Erro ao adicionar ponto de coleta.");
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
      notify("Erro ao atualizar ponto de coleta.", "error");
      setError("Erro ao atualizar ponto de coleta.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/auth/users/${id}`, authEx);
      notify("Ponto de coleta deletado com sucesso!", "success");
      setUsers((prev) => prev.filter((user) => user.id !== id));
      fetchUsers();
    } catch(err) {
      console.log(err);
      notify("Erro ao deletar ponto de coleta.", "error");
      setError("Erro ao deletar ponto de coleta.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, loading, error, fetchUsers, addUser, updateUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};
