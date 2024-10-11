import Header from "../../components/header/header";
import DynamicEvents from "../../components/dynamicEvents";
import { useState } from "react";
import {
    PlusCircleIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function Events() {
    const [favoriteButton, setFavoriteButton] = useState(true);

    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            <section className="flex flex-col grow py-6 px-24 gap-4">
                <h1 className="font-bold text-5xl">Eventos</h1>
                <div className="flex justify-between mb-6">
                    <div className="flex gap-4">
                        <div className="bg-[#DEE3ED] rounded-xl p-3 flex items-center">
                            <MagnifyingGlassIcon className="w-6 h-6 text-[#7E7E7E] mr-2"></MagnifyingGlassIcon>
                            <input
                                type="text"
                                className="bg-transparent focus:outline-none"
                                placeholder="Filtrar pelo nome"
                            />
                        </div>
                        <div className="bg-[#DEE3ED] rounded-xl py-1 px-3 flex justify-between items-center">
                            <span className="text-[#82869A]">Tipo: </span>
                            <select className="bg-transparent focus:outline-none">
                                <option value="newest">Mais recente</option>
                                <option value="oldest">Mais antigo</option>
                            </select>
                        </div>
                        <div className="bg-[#DEE3ED] rounded-xl p-1 px-3 flex items-center">
                            <span className="text-[#82869A]">Localização:</span>
                            <select className="bg-transparent focus:outline-none">
                                <option value="sp">São Paulo</option>
                                <option value="pe">Pernambuco</option>
                            </select>
                        </div>
                        <div className="bg-[#DEE3ED] rounded-xl p-1 px-3 flex items-center gap-3">
                            <span className="text-[#82869A]">Inscrito:</span>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setFavoriteButton(!favoriteButton);
                                }}
                                className={`bg-${
                                    favoriteButton ? "white" : "[#333333]"
                                } border-[#333333] border-2 rounded-2xl flex gap-1`}
                            >
                                <div className="min-h-6 min-w-6 bg-[#333333] rounded-[50%] m-px"></div>
                                <div className="min-h-6 min-w-6 bg-white rounded-[50%] m-px"></div>
                            </button>
                        </div>
                    </div>
                    <button className="bg-[#00A8A8] text-white rounded-2xl p-2">
                        <PlusCircleIcon className="h-8 w-8"></PlusCircleIcon>
                    </button>
                </div>
                <DynamicEvents />
            </section>
        </main>
    );
}

export default Events;
