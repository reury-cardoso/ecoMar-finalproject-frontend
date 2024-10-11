import {
    HeartIcon,
    MapPinIcon,
    CalendarIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function DynamicEvents() {
    const [toggleHeartIcon, setToggleHeartIcon] = useState(false);

    return (
        <section>
            <div className="bg-[#DEE3ED] w-fit h-fit rounded-lg">
                <div className="flex justify-end w-full">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setToggleHeartIcon(!toggleHeartIcon);
                        }}
                        className="bg-[#EDEFF6] p-1"
                    >
                        {toggleHeartIcon ? (
                            <SolidHeartIcon className="w-6 h-6 text-red-600"></SolidHeartIcon>
                        ) : (
                            <HeartIcon className="w-6 h-6 text-[#4A60A1]"></HeartIcon>
                        )}
                    </button>
                </div>
                <article className="py-3 px-6 gap-2 flex flex-col">
                    <h2 className="font-bold text-lg">Limpeza da praia</h2>
                    <div className="bg-[#0A2F51] text-white w-fit py-1 px-3 rounded-xl">Limpeza</div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <MapPinIcon className="w-8 h-8"></MapPinIcon>
                        <span>Praia de Copacabana</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <CalendarIcon className="w-8 h-8"></CalendarIcon>
                        <span>15/09/2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="p-1 rounded-[50%] bg-[#0A2F51] text-white w-10 h-10 flex items-center justify-center">?</button>
                        <button className="p-2 px-3 rounded-xl bg-[#0A2F51] h-10 text-white flex items-center justify-center">Inscrever-se</button>
                    </div>
                </article>
            </div>
        </section>
    );
}
