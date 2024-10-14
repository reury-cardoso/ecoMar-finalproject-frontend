import {
  MapPinIcon,
  UserGroupIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CurrentSectionContext } from "../../context/currentSectionContext";
import { EventsContext } from "../../context/eventsContext";
import { PointsContext } from "../../context/PointsContext";
import { UsersContext } from "../../context/UsersContext";

function AdminLeftSection() {
  const { currentSection, setCurrentSection } = useContext(
    CurrentSectionContext
  );
  const { fetchEvents } = useContext(EventsContext);
  const { fetchPoints } = useContext(PointsContext);
  const { fetchUsers } = useContext(UsersContext);

  return (
    <div
      id="leftSectionHeader"
      className="w-full md:w-[16%] flex flex-col text-center gap-4 p-4 md:p-8 relative bg-white shadow-lg md:shadow-none"
    >
      <div
        onClick={() => {
          fetchPoints();
          setCurrentSection("points");
        }}
        className={`flex items-center gap-2 px-6 py-2 md:px-10 md:py-[.5rem] rounded-lg transition duration-300 cursor-pointer ${
          currentSection === "points"
            ? "bg-[#0A2F51] text-white hover:bg-[#094883]"
            : "hover:bg-gray-100"
        }`}
      >
        <MapPinIcon className="h-6 w-6" />
        <span>Pontos</span>
      </div>

      <div
        onClick={() => {
          fetchUsers();
          setCurrentSection("users");
        }}
        className={`flex items-center gap-2 px-6 py-2 md:px-10 md:py-[.5rem] rounded-lg transition duration-300 cursor-pointer ${
          currentSection === "users"
            ? "bg-[#0A2F51] text-white hover:bg-[#094883]"
            : "hover:bg-gray-100"
        }`}
      >
        <UserGroupIcon className="h-6 w-6" />
        <span>Usuários</span>
      </div>

      <div
        onClick={() => {
          fetchEvents();
          setCurrentSection("events");
        }}
        className={`flex items-center gap-2 px-6 py-2 md:px-10 md:py-[.5rem] rounded-lg transition duration-300 cursor-pointer ${
          currentSection === "events"
            ? "bg-[#0A2F51] text-white hover:bg-[#094883]"
            : "hover:bg-gray-100"
        }`}
      >
        <SpeakerWaveIcon className="h-6 w-6" />
        <span>Eventos</span>
      </div>
    </div>
  );
}

export default AdminLeftSection;
