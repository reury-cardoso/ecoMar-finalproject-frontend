/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { notify } from "../components/notifications";
import { AuthContext } from "./authContext";

const baseUrl = import.meta.env.VITE_URL_API;

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);

  const authEx = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/events`);
      setEvents(response.data);
    } catch {
      setError("Erro ao buscar eventos.");
    } finally {
      setLoadingEvents(false);
    }
  };

  const fetchEvent = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/api/events/${id}`);
      return response.data;
    } catch {
      setError("Erro ao buscar evento.");
    }
  };

  const addEvent = async (newEvent) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/events`,
        newEvent,
        authEx
      );
      setEvents((prev) => [...prev, response.data]);
      fetchEvents();
    } catch {
      setError("Erro ao adicionar evento.");
    }
  };

  const updateEvent = async (id, eventUpdated) => {
    try {
      const response = await axios.put(
        `${baseUrl}/api/events/${id}`,
        eventUpdated,
        authEx
      );
      notify("Evento atualizado com sucesso!", "success");
      setEvents((prev) =>
        prev.map((event) => (event.id === id ? response.data : event))
      );
      fetchEvents();
    } catch {
      setError("Erro ao atualizar evento.");
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/events/${id}`, authEx);
      notify("Evento deletado com sucesso!", "success");
      setEvents((prev) => prev.filter((event) => event.id !== id));
      fetchEvents();
    } catch {
      setError("Erro ao deletar evento.");
    }
  };

  useEffect(() => {
    notify(error, "error");
  }, [error]);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider
      value={{
        events,
        loadingEvents,
        error,
        fetchEvents,
        fetchEvent,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
