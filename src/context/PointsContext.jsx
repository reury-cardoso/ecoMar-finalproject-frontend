/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { notify } from "../components/notifications";
import { AuthContext } from "./authContext";

const baseUrl = import.meta.env.VITE_URL_API;

export const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const authEx = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  const [points, setPoints] = useState([]);
  const [loadingPoints, setLoadingPoints] = useState(true);
  const [error, setError] = useState(null);

  const fetchPoints = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/points`);
      setPoints(response.data);
    } catch {
      setError("Erro ao buscar ponto de coleta.");
    } finally {
      setLoadingPoints(false);
    }
  };

  const addPoint = async (newPoint) => {
    try {
      const response = await axios.post(`${baseUrl}/api/points`, newPoint, authEx);
      setPoints((prev) => [...prev, response.data]);
      fetchPoints();
    } catch {
      setError("Erro ao adicionar ponto de coleta.");
    }
  };

  const updatePoint = async (id, pointUpdated) => {
    try {
      const response = await axios.put(`${baseUrl}/api/points/${id}`, pointUpdated, authEx);
      notify("Ponto de coleta atualizado com sucesso!", "success");
      setPoints((prev) =>
        prev.map((point) => (point.id === id ? response.data : point))
      );
      fetchPoints();
    } catch {
      setError("Erro ao atualizar ponto de coleta.");
    }
  };

  const deletePoint = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/points/${id}`, authEx);
      notify("Ponto de coleta deletado com sucesso!", "success");
      setPoints((prev) => prev.filter((point) => point.id !== id));
      fetchPoints();
    } catch(err) {
      console.log(err);
      setError("Erro ao deletar ponto de coleta.");
    }
  };

  useEffect(() => {
    notify(error, "error");
  }, [error]);

  useEffect(() => {
    fetchPoints();
  }, []);

  return (
    <PointsContext.Provider value={{ points, loadingPoints, error, fetchPoints, addPoint, updatePoint, deletePoint }}>
      {children}
    </PointsContext.Provider>
  );
};
