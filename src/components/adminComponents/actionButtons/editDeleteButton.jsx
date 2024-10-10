import { useContext } from "react";
import { EventsContext } from "../../../context/eventsContext";
import { PointsContext } from "../../../context/PointsContext";
import { UsersContext } from "../../../context/UsersContext";
import loadingSvg from "../../../assets/tubeSpinner.svg";

/* eslint-disable react/prop-types */
function EditDeleteButton({ theSection, idElement }) {
  const { deleteEvent, loading: loadingEvents  } = useContext(EventsContext);
  const { deletePoint, loading: loadingPoints } = useContext(PointsContext);
  const { deleteUser, loading: loadingUsers } = useContext(UsersContext);

  const isLoading = loadingEvents || loadingPoints || loadingUsers;

  const sectionDelete =
    theSection === "events"
      ? deleteEvent
      : theSection === "points"
      ? deletePoint
      : deleteUser;

  return (
    <>
      <button className="[transition:all_.3s] bg-blue-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Editar
      </button>
      <button
        onClick={() => sectionDelete(idElement)}
        className="[transition:all_.3s] bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        {isLoading ? (
          <img src={loadingSvg} alt="Loading" className="mx-auto" />
        ) : (
          "Excluir"
        )}
      </button>
    </>
  );
}

export default EditDeleteButton;
