import {
  MapPinIcon,
  UserGroupIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CurrentSectionContext } from "../../context/currentSectionContext";
import { EventsContext } from "../../context/eventsContext";
import { PointsContext } from "../../context/pointsContext";
import { UsersContext } from "../../context/usersContext";

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
      className="w-[16%] flex flex-col text-center gap-4 p-8 fixed"
    >
      <div
        onClick={() => {
          fetchPoints();
          setCurrentSection("points");
        }}
        className={`flex items-center gap-2 px-10 py-[.5rem] rounded-[8px] [transition:background-color_.3s] cursor-pointer ${
          currentSection === "points"
            ? "!bg-[#0A2F51] !text-[#fff] hover:!bg-[#094883]"
            : "hover:bg-[#f5f5f5]"
        }`}
      >
        <MapPinIcon className="size-6 " />
        <span>Pontos</span>
      </div>

      <div
        onClick={() => {
          fetchUsers();
          setCurrentSection("users");
        }}
        className={`flex items-center gap-2 px-10 py-[.5rem] rounded-[8px] [transition:background-color_.3s] cursor-pointer  ${
          currentSection === "users"
            ? "!bg-[#0A2F51] !text-[#fff] hover:!bg-[#094883]"
            : "hover:bg-[#f5f5f5]"
        }`}
      >
        <UserGroupIcon className="size-6 " />
        <span>Usuário</span>
      </div>

      <div
        onClick={() => {
          fetchEvents();
          setCurrentSection("events");
        }}
        className={`flex items-center gap-2 px-10 py-[.5rem] rounded-[8px] [transition:background-color_.3s] cursor-pointer  ${
          currentSection === "events"
            ? "!bg-[#0A2F51] !text-[#fff] hover:!bg-[#094883]"
            : "hover:bg-[#f5f5f5]"
        }`}
      >
        <SpeakerWaveIcon className="size-6 " />
        <span>Eventos</span>
      </div>
    </div>
  );
}

export default AdminLeftSection;
