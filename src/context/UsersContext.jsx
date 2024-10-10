/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { notify } from "../components/notifications/notifications";
import { AuthContext } from "./authContext";

const baseUrl = import.meta.env.VITE_URL_API;

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const authEx = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
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
      notify("Usuário atualizado com sucesso!", "success");
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
      notify("Usuário deletado com sucesso!", "success");
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
