import {
    HeartIcon,
    MapPinIcon,
    TrashIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function DynamicPoints() {
    const [toggleHeartIcon, setToggleHeartIcon] = useState(false);

    return (
        <section className="grid grid-cols-5 gap-12 w-full">
            <div className="bg-[#DEE3ED] rounded-lg">
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
                            <HeartIcon className="w-6 h-6"></HeartIcon>
                        )}
                    </button>
                </div>
                <article className="py-3 px-6 gap-2 flex flex-col">
                    <h2 className="font-bold text-lg">Ecoponto de São Paulo</h2>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <MapPinIcon className="w-8 h-8"></MapPinIcon>
                        <span>Av. Celso Garcia, 2532</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <TrashIcon className="w-8 h-8"></TrashIcon>
                        <span>Eletrônicos</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <ClockIcon className="w-8 h-8"></ClockIcon>
                        <span>Seg - Sex | 07h - 19h</span>
                    </div>
                </article>
            </div>
            <div className="bg-[#DEE3ED] rounded-lg">
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
                            <HeartIcon className="w-6 h-6"></HeartIcon>
                        )}
                    </button>
                </div>
                <article className="py-3 px-6 gap-2 flex flex-col">
                    <h2 className="font-bold text-lg">Ecoponto de São Paulo</h2>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <MapPinIcon className="w-8 h-8"></MapPinIcon>
                        <span>Av. Celso Garcia, 2532</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <TrashIcon className="w-8 h-8"></TrashIcon>
                        <span>Eletrônicos</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <ClockIcon className="w-8 h-8"></ClockIcon>
                        <span>Seg - Sex | 07h - 19h</span>
                    </div>
                </article>
            </div>
            <div className="bg-[#DEE3ED] rounded-lg">
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
                            <HeartIcon className="w-6 h-6"></HeartIcon>
                        )}
                    </button>
                </div>
                <article className="py-3 px-6 gap-2 flex flex-col">
                    <h2 className="font-bold text-lg">Ecoponto de São Paulo</h2>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <MapPinIcon className="w-8 h-8"></MapPinIcon>
                        <span>Av. Celso Garcia, 2532</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <TrashIcon className="w-8 h-8"></TrashIcon>
                        <span>Eletrônicos</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <ClockIcon className="w-8 h-8"></ClockIcon>
                        <span>Seg - Sex | 07h - 19h</span>
                    </div>
                </article>
            </div>
            <div className="bg-[#DEE3ED] rounded-lg">
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
                            <HeartIcon className="w-6 h-6"></HeartIcon>
                        )}
                    </button>
                </div>
                <article className="py-3 px-6 gap-2 flex flex-col">
                    <h2 className="font-bold text-lg">Ecoponto de São Paulo</h2>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <MapPinIcon className="w-8 h-8"></MapPinIcon>
                        <span>Av. Celso Garcia, 2532</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <TrashIcon className="w-8 h-8"></TrashIcon>
                        <span>Eletrônicos</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <ClockIcon className="w-8 h-8"></ClockIcon>
                        <span>Seg - Sex | 07h - 19h</span>
                    </div>
                </article>
            </div>
            <div className="bg-[#DEE3ED] rounded-lg">
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
                            <HeartIcon className="w-6 h-6"></HeartIcon>
                        )}
                    </button>
                </div>
                <article className="py-3 px-6 gap-2 flex flex-col">
                    <h2 className="font-bold text-lg">Ecoponto de São Paulo</h2>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <MapPinIcon className="w-8 h-8"></MapPinIcon>
                        <span>Av. Celso Garcia, 2532</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <TrashIcon className="w-8 h-8"></TrashIcon>
                        <span>Eletrônicos</span>
                    </div>
                    <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
                        <ClockIcon className="w-8 h-8"></ClockIcon>
                        <span>Seg - Sex | 07h - 19h</span>
                    </div>
                </article>
            </div>
        </section>
    );
}
