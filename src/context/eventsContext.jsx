/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { notify } from "../components/notifications/notifications";

const baseUrl = import.meta.env.VITE_URL_API;

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/api/events`);
      setEvents(response.data);
    } catch {
      setError("Erro ao buscar eventos.");
    } finally {
      setLoading(false);
    }
  };

  const addEvent = async (newEvent) => {
    try {
      const response = await axios.post(`${baseUrl}/api/events`, newEvent);
      setEvents((prev) => [...prev, response.data]);
      fetchEvents();
    } catch {
      notify("Erro ao adicionar evento.", "error");
      setError("Erro ao adicionar evento.");
    }
  };

  const updateEvent = async (id, eventUpdated) => {
    try {
      const response = await axios.put(`${baseUrl}/api/events/${id}`, eventUpdated);
      notify("Evento atualizado com sucesso!", "success");
      setEvents((prev) =>
        prev.map((event) => (event.id === id ? response.data : event))
      );
      fetchEvents();
    } catch {
      notify("Erro ao atualizar evento.", "error");
      setError("Erro ao atualizar evento.");
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/events/${id}`);
      notify("Evento deletado com sucesso!", "success");
      setEvents((prev) => prev.filter((event) => event.id !== id));
      fetchEvents();
    } catch {
      notify("Erro ao deletar evento.", "error");
      setError("Erro ao deletar usuário.");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={{ events, loading, error, fetchEvents, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
};
