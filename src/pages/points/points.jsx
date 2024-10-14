/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../../components/header/header";
import DynamicPoints from "../../components/dynamicPoints";
import { useContext, useState, useEffect } from "react";
import { PlusCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PointsContext } from "../../context/PointsContext";
import loadingSvg from "../../assets/tubeSpinner.svg";
import DynamicModal from "../../components/dynamicModal/dynamicModal";
import { notify } from "../../components/notifications";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const baseUrl = import.meta.env.VITE_URL_API;

function Points() {
    const { points, addPoint } = useContext(PointsContext);
    const { isLogged } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
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

    const onSubmit = async (newPoint) => {
        try {
            await addPoint(newPoint);
            notify("Ponto de coleta adicionado com sucesso", "success");
        } catch {
            notify("Erro ao adicionar ponto de coleta", "error");
        }
    };

    const loadFavorites = async () => {
        if (isLogged) {
            try {
                const userId = localStorage.getItem("user_id");
                const { data } = await axios.get(`${baseUrl}/api/favorites/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setFavorites(data);
            } catch {
                notify("Erro ao carregar favoritos", "error");
            }
        }
    };

    useEffect(() => {
        if (points.length >= 0) {
            setLoading(false);
        }
        loadFavorites();
    }, [points, isLogged]);

    const uniqueLocations = Array.from(
        new Set(
            points.filter((point) => point.status === "approved").map((point) => point.location)
        )
    );

    const sortPoints = (pointsList) => {
        return pointsList.sort((a, b) => {
            if (selectedType === "newest") {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (selectedType === "oldest") {
                return new Date(a.createdAt) - new Date(b.createdAt);
            }
            return 0;
        });
    };

    const filteredPoints = sortPoints(
        points.filter((point) => {
            const nameMatches = point.name.toLowerCase().includes(searchName.toLowerCase());
            const locationMatches = selectedLocation ? point.location === selectedLocation : true;
            const statusMatches = point.status === "approved";

            return nameMatches && locationMatches && statusMatches;
        })
    );

    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <section className="flex flex-col grow py-6 px-4 md:px-12 lg:px-24 gap-4">
                <h1 className="font-bold text-3xl md:text-4xl text-gray-800">Pontos de Coleta</h1>
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="bg-[#DEE3ED] rounded-xl p-3 flex items-center hover:bg-[#cfd6e4] transition-colors">
                            <MagnifyingGlassIcon className="w-6 h-6 text-[#7E7E7E] mr-2 hover:text-[#4A4A4A]" />
                            <input
                                type="text"
                                className="bg-transparent focus:outline-none"
                                placeholder="Filtrar pelo nome"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                        </div>
                        <div className="bg-[#DEE3ED] rounded-xl py-1 px-3 flex justify-between items-center hover:bg-[#cfd6e4] transition-colors">
                            <select
                                className="bg-transparent focus:outline-none"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                            >
                                <option value="newest">Mais recente</option>
                                <option value="oldest">Mais antigo</option>
                            </select>
                        </div>
                        <div className="bg-[#DEE3ED] rounded-xl p-1 px-3 flex items-center hover:bg-[#cfd6e4] transition-colors">
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
                        {filteredPoints.length > 0 ? (
                            filteredPoints.map((point) => (
                                <DynamicPoints
                                    key={point.point_id}
                                    point={point}
                                    isLogged={isLogged}
                                    favorites={favorites}
                                />
                            ))
                        ) : (
                            <div className="text-center text-[#82869A] text-2xl col-span-5">
                                Nenhum ponto de coleta encontrado
                            </div>
                        )}
                    </section>
                )}
            </section>
            <DynamicModal
                mode="add"
                modalIsOpen={modalIsOpen}
                setModalIsOpen={closeModal}
                entity="points"
                onSubmit={onSubmit}
                limit={1}
            />
        </main>
    );
}

export default Points;
