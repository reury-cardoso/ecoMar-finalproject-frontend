/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { notify } from "../components/notifications/notifications";

const baseUrl = import.meta.env.VITE_URL_API;

const authEx = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
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
