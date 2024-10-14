/* eslint-disable react/prop-types */
import {
  HeartIcon,
  MapPinIcon,
  TrashIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import axios from "axios";
import { notify } from "./notifications";

const baseUrl = import.meta.env.VITE_URL_API;

export default function DynamicPoints({ point, isLogged, favorites }) {
  const [toggleHeartIcon, setToggleHeartIcon] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);

  useEffect(() => {
    const isFavorited = favorites.find((fav) => fav.point_id === point.point_id);
    if (isFavorited) {
      setToggleHeartIcon(true);
      setFavoriteId(isFavorited.favorite_id);
    }
  }, [favorites, point]);

  const handleToggleHeart = async () => {
    try {
      if (toggleHeartIcon) {
        await axios.delete(`${baseUrl}/api/favorites/${favoriteId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        notify("Ponto removido dos favoritos", "success");
        setToggleHeartIcon(false);
      } else {
        const { data: newFavorite } = await axios.post(
          `${baseUrl}/api/favorites`,
          { point_id: point.point_id, user_id: localStorage.getItem("user_id") },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        notify("Ponto adicionado aos favoritos", "success");
        setFavoriteId(newFavorite.favorite_id);
        setToggleHeartIcon(true);
      }
    } catch {
      notify("Erro ao alterar favoritos", "error");
    }
  };

  return (
    <div className="bg-[#DEE3ED] rounded-lg">
      <div className="flex justify-end w-full">
        <button
          onClick={(e) => {
            if (isLogged) {
              e.preventDefault();
              handleToggleHeart(); 
            } else {
              window.location.href = "/login";
            }
          }}
          className="bg-[#EDEFF6] p-1 rounded-tr-lg"
        >
          {toggleHeartIcon ? (
            <SolidHeartIcon className="w-6 h-6 text-red-600"></SolidHeartIcon>
          ) : (
            <HeartIcon className="w-6 h-6"></HeartIcon>
          )}
        </button>
      </div>
      <article className="py-3 px-6 gap-2 flex flex-col">
        <h2 className="font-bold text-lg">{point.name}</h2>
        <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
          <MapPinIcon className="w-8 h-8"></MapPinIcon>
          <span>{point.location}</span>
        </div>
        <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
          <TrashIcon className="w-8 h-8"></TrashIcon>
          <span>{point.waste_type}</span>
        </div>
        <div className="text-[#6D737A] text-sm font-medium flex items-center gap-1">
          <ClockIcon className="w-8 h-8"></ClockIcon>
          <span>{point.operating_hours}</span>
        </div>
      </article>
    </div>
  );
}
