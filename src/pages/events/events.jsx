import Header from "../../components/header/header";
import DynamicEvents from "../../components/dynamicEvents";
import { useContext, useState, useEffect } from "react";
import { PlusCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EventsContext } from "../../context/eventsContext";
import { AuthContext } from "../../context/authContext";
import loadingSvg from "../../assets/tubeSpinner.svg";
import DynamicModal from "../../components/dynamicModal/dynamicModal";
import { notify } from "../../components/notifications";
import axios from "axios";

const baseUrl = import.meta.env.VITE_URL_API;

function Events() {
    const { events, addEvent } = useContext(EventsContext);
    const { isLogged } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState("");
    const [selectedType, setSelectedType] = useState("newest");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const onSubmit = async (newEvent) => {
        try {
            await addEvent(newEvent);
            notify("Evento adicionado com sucesso", "success");
        } catch {
            notify("Erro ao adicionar evento", "error");
        }
    };

    useEffect(() => {
        const fetchFavorites = async () => {
            if (isLogged) {
                const response = await axios.get(`${baseUrl}/api/favorites`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setFavorites(response.data);
            }
        };

        fetchFavorites();
    }, [isLogged]);

    useEffect(() => {
        if (events.length > 0 || events.length === 0) {
            setLoading(false);
        }
    }, [events]);

    const uniqueLocations = Array.from(
        new Set(events
            .filter(event => event.status === 'approved') 
            .map(event => event.location))
    );

    const sortEvents = (eventsList) => {
        return eventsList.sort((a, b) => {
            if (selectedType === "newest") {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (selectedType === "oldest") {
                return new Date(a.createdAt) - new Date(b.createdAt);
            }
            return 0;
        });
    };

    const filteredEvents = sortEvents(
        events.filter((event) => {
            const nameMatches = event.name.toLowerCase().includes(searchName.toLowerCase());
            const locationMatches = selectedLocation ? event.location === selectedLocation : true;
            const statusMatches = event.status === 'approved';
            return nameMatches && locationMatches && statusMatches;
        })
    );

    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <section className="flex flex-col grow py-6 px-4 md:px-12 lg:px-24 gap-4">
                <h1 className="font-bold text-3xl md:text-4xl text-gray-800">Eventos</h1>
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-[#DEE3ED] rounded-xl p-3 flex items-center hover:bg-[#cfd6e4] transition-colors duration-200">
                            <MagnifyingGlassIcon className="w-6 h-6 text-[#7E7E7E] mr-2 hover:text-[#4A4A4A] transition-colors duration-200" />
                            <input
                                type="text"
                                className="bg-transparent focus:outline-none"
                                placeholder="Filtrar pelo nome"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                        </div>
                        <div className="bg-[#DEE3ED] rounded-xl py-1 px-3 flex justify-between items-center hover:bg-[#cfd6e4] transition-colors duration-200">
                            <select
                                className="bg-transparent focus:outline-none"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                            >
                                <option value="newest">Mais recente</option>
                                <option value="oldest">Mais antigo</option>
                            </select>
                        </div>
                        <div className="bg-[#DEE3ED] rounded-xl p-1 px-3 flex items-center hover:bg-[#cfd6e4] transition-colors duration-200">
                            <select
                                className="bg-transparent focus:outline-none"
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                            >
                                <option value="">Todas as Localizações</option>
                                {uniqueLocations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            if (isLogged) {
                                openModal();
                            } else {
                                window.location.href = "/login";
                            }
                        }}
                        className="bg-[#00A8A8] hover:bg-[#008B8B] text-white rounded-lg p-2 flex items-center transition duration-200 justify-center"
                    >
                        <PlusCircleIcon className="h-8 w-8" />
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <img src={loadingSvg} alt="Carregando..." className="w-16 h-16" />
                    </div>
                ) : (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => (
                                <DynamicEvents key={event.event_id} event={event} isLogged={isLogged} favorites={favorites} />
                            ))
                        ) : (
                            <div className="text-center text-[#82869A] text-2xl col-span-5">
                                Nenhum evento encontrado
                            </div>
                        )}
                    </section>
                )}
            </section>
            <DynamicModal
                mode="add"
                modalIsOpen={modalIsOpen}
                setModalIsOpen={closeModal}
                entity="events"
                onSubmit={onSubmit}
                limit={1}
            />
        </main>
    );
}

export default Events;
