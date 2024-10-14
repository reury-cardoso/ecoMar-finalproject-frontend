/* eslint-disable react/prop-types */
import {
    HeartIcon,
    MapPinIcon,
    CalendarIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function DynamicEvents({event, isLogged}) {
    const [toggleHeartIcon, setToggleHeartIcon] = useState(false);

    return (
        <div className="bg-[#DEE3ED] rounded-lg">
            <div className="flex justify-end w-full">
                <button
                        onClick={(e) => {
                            if (isLogged) {
                            e.preventDefault();
                            setToggleHeartIcon(!toggleHeartIcon);
                            } else {
                            window.location.href = "/login";
                            }
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
                <h2 className="font-bold text-lg">{event.name}</h2>
                <div className="bg-[#0A2F51] text-white w-fit py-1 px-3 rounded-xl">{event.event_type}</div>
                <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                    <MapPinIcon className="w-8 h-8"></MapPinIcon>
                    <span>{event.location}</span>
                </div>
                <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                    <CalendarIcon className="w-8 h-8"></CalendarIcon>
                    <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center">
                    <button title={event.description} className="w-[100%] p-1 rounded-md bg-[#0A2F51] h-10 flex items-center justify-center text-[#e0e4e7]">Descrição</button>
                </div>
            </article>
        </div>
    );
}
