import { useContext, useState } from "react";
import { EventsContext } from "../../../context/eventsContext";
import { PointsContext } from "../../../context/PointsContext";
import { UsersContext } from "../../../context/UsersContext";
import loadingSvg from "../../../assets/tubeSpinner.svg";

/* eslint-disable react/prop-types */
function EditDeleteButton({ theSection, idElement }) {
  const { deleteEvent } = useContext(EventsContext);
  const { deletePoint } = useContext(PointsContext);
  const { deleteUser } = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(false);

  const sectionDelete =
    theSection === "events"
      ? deleteEvent
      : theSection === "points"
      ? deletePoint
      : deleteUser;

  const handleDelete = async (id) => {
    setIsLoading(true);
    await sectionDelete(id);
    setIsLoading(false);
  };

  return (
    <>
      <button className="[transition:all_.3s] bg-blue-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Editar
      </button>
      <button
        onClick={() => handleDelete(idElement)}
        className="[transition:all_.3s] bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 w-[60.94px] max-h-[24px]"
      >
        {isLoading ? (
          <img src={loadingSvg} alt="Loading" className="m-auto !h-[15px]" />
        ) : (
          "Excluir"
        )}
      </button>
    </>
  );
}

export default EditDeleteButton;
