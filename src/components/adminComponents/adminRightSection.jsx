import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AdminDataTableBodyPoints from "./points/adminDataTableBodyPoints";
import AdminDataTableBodyUsers from "./users/adminDataTableBodyUsers";
import AdminDataTableBodyEvents from "./events/adminDataTableBodyEvents";
import { useContext, useEffect, useState } from "react";
import { CurrentSectionContext } from "../../context/CurrentSectionContext.jsx";
import { EventsContext } from "../../context/EventsContext.jsx";
import { PointsContext } from "../../context/PointsContext.jsx";
import { UsersContext } from "../../context/UsersContext.jsx";
import loadingSvg from "../../assets/tubeSpinnerNigth.svg";

function AdminRightSection() {
  const { events, loadingEvents } = useContext(EventsContext);
  const { points, loadingPoints } = useContext(PointsContext);
  const { users, loadingUsers } = useContext(UsersContext);
  const [loading, setLoading] = useState(false);
  const { currentSection } = useContext(CurrentSectionContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (currentSection === "users") {
      setLoading(loadingUsers);
    } else if (currentSection === "events") {
      setLoading(loadingEvents);
    } else {
      setLoading(loadingPoints);
    }
  }, [currentSection, loadingEvents, loadingPoints, loadingUsers]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const headNames =
    currentSection === "users"
      ? ["Nome", "Email", "Telefone", "Tipo"]
      : currentSection === "events"
      ? ["Nome", "Descricao", "Data", "Local", "Tipo", "Status"]
      : ["Nome", "Localização", "Tipo", "Horário", "Status"];

  const ComponentTableBody =
    currentSection === "users"
      ? AdminDataTableBodyUsers
      : currentSection === "events"
      ? AdminDataTableBodyEvents
      : AdminDataTableBodyPoints;

  const data =
    currentSection === "users"
      ? users
      : currentSection === "events"
      ? events
      : points;

  const filteredData = data.filter((item) => {
    const name = item.name || "";
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div
      id="rightSectionHeader"
      className="w-[84%] bg-[#E0E5EC] p-[24px] ml-auto"
    >
      <h1 className="font-bold text-[25px] text-gray-900">
        {currentSection === "users"
          ? "Usuários"
          : currentSection === "events"
          ? "Eventos"
          : "Pontos de Coleta"}
      </h1>
      <div className="w-full my-[15px] bg-white border border-gray-400 rounded-md">
        <div className="flex items-center  px-4 py-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />{" "}
          <input
            className="w-full pl-2 outline-none border-none text-gray-800 bg-transparent"
            type="text"
            placeholder="Pesquisar por nome"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="overflow-x-auto border-collapse border border-gray-300 rounded-xl">
        <table className="min-w-full table-auto bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-800 uppercase text-sm leading-normal">
              {headNames.map((headName) => (
                <th key={headName} className="py-3 px-6 text-left">
                  {headName}
                </th>
              ))}
              <th className="py-3 px-6 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center">
                  <img
                    src={loadingSvg}
                    alt="loading"
                    className="h-12 px-0 py-[10px] mx-auto fill-current text-blue-500"
                  />
                </td>
              </tr>
            ) : filteredData.length !== 0 ? (
              filteredData.map((dataItem) => (
                <ComponentTableBody
                  key={
                    dataItem.event_id ?? dataItem.point_id ?? dataItem.user_id
                  }
                  dataTable={dataItem}
                />
              ))
            ) : (
              <tr className="border-b border-gray-300 hover:bg-gray-100">
                <td colSpan="6" className="py-3 px-6 text-center">
                  Nenhum dado encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminRightSection;
