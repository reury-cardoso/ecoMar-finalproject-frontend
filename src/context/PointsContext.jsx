/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { notify } from "../components/notifications/notifications";

const baseUrl = import.meta.env.VITE_URL_API;

export const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPoints = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/api/points`);
      setPoints(response.data);
    } catch {
      setError("Erro ao buscar ponto de coleta.");
    } finally {
      setLoading(false);
    }
  };

  const addPoint = async (newPoint) => {
    try {
      const response = await axios.post(`${baseUrl}/api/points`, newPoint);
      setPoints((prev) => [...prev, response.data]);
      fetchPoints();
    } catch {
      notify("Erro ao adicionar ponto de coleta.", "error");
      setError("Erro ao adicionar ponto de coleta.");
    }
  };

  const updatePoint = async (id, pointUpdated) => {
    try {
      const response = await axios.put(`${baseUrl}/api/points/${id}`, pointUpdated);
      notify("Ponto de coleta atualizado com sucesso!", "success");
      setPoints((prev) =>
        prev.map((point) => (point.id === id ? response.data : point))
      );
      fetchPoints();
    } catch {
      notify("Erro ao atualizar ponto de coleta.", "error");
      setError("Erro ao atualizar ponto de coleta.");
    }
  };

  const deletePoint = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/points/${id}`);
      notify("Ponto de coleta deletado com sucesso!", "success");
      setPoints((prev) => prev.filter((point) => point.id !== id));
      fetchPoints();
    } catch(err) {
      console.log(err);
      notify("Erro ao deletar ponto de coleta.", "error");
      setError("Erro ao deletar ponto de coleta.");
    }
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  return (
    <PointsContext.Provider value={{ points, loading, error, fetchPoints, addPoint, updatePoint, deletePoint }}>
      {children}
    </PointsContext.Provider>
  );
};
