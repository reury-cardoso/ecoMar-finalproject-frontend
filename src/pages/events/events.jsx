import Header from "../../components/header/header";
import DynamicEvents from "../../components/dynamicEvents";
import { useContext, useState, useEffect } from "react";
import { PlusCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EventsContext } from "../../context/EventsContext";
import { AuthContext } from "../../context/AuthContext";
import loadingSvg from "../../assets/tubeSpinner.svg";
import DynamicModal from "../../components/dynamicModal/dynamicModal";
import { notify } from "../../components/notifications";

function Events() {
    const { events, addEvent } = useContext(EventsContext);
    const { isLogged } = useContext(AuthContext);
    const [favoriteButton, setFavoriteButton] = useState(true);
    const [loading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState("");
    const [selectedType, setSelectedType] = useState("newest");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
        if (events.length > 0 || events.length === 0) {
            setLoading(false);
        }
    }, [events]);

    const uniqueLocations = Array.from(
        new Set(events
            .filter(event => event.status === 'approved') 
            .map(event => event.location)));

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
            <section className="flex flex-col grow py-6 px-24 gap-4">
                <h1 className="font-bold text-4xl text-gray-800">Eventos</h1>
                <div className="flex justify-between mb-6">
                    <div className="flex gap-4">
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
                        <div className="bg-[#DEE3ED] rounded-xl p-3 flex items-center gap-3 shadow-sm hover:bg-[#cfd6e4] transition-colors duration-200">
                            <span className="text-[#82869A] font-medium">Favoritos:</span>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setFavoriteButton(!favoriteButton);
                                }}
                                className={`flex items-center justify-center transition duration-300 rounded-full p-1 border-2 ${
                                    favoriteButton ? "bg-white border-[#333333]" : "bg-[#333333] border-white"
                                } shadow-sm hover:shadow-md`}
                            >
                                <div className={`h-4 w-4 bg-[#333333] rounded-full transition-transform duration-300 transform ${favoriteButton ? "scale-100" : "scale-50"}`}></div>
                                <div className={`h-4 w-4 bg-white rounded-full transition-transform duration-300 transform ${favoriteButton ? "scale-50" : "scale-100"}`}></div>
                            </button>
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
                        className="bg-[#00A8A8] hover:bg-[#008B8B] text-white rounded-lg p-2 flex items-center transition duration-200"
                    >
                        <PlusCircleIcon className="h-8 w-8" />
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <img src={loadingSvg} alt="Carregando..." className="w-16 h-16" />
                    </div>
                ) : (
                    <section className="grid grid-cols-5 gap-12 w-full">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => (
                                <DynamicEvents key={event.event_id} event={event} isLogged={isLogged} />
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
