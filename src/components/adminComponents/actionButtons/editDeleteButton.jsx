import { useContext, useState } from "react";
import { EventsContext } from "../../../context/eventsContext";
import { PointsContext } from "../../../context/PointsContext";
import { UsersContext } from "../../../context/UsersContext";
import loadingSvg from "../../../assets/tubeSpinner.svg";
import DynamicModal from "../../dynamicModal/dynamicModal";
import { notify } from "../../notifications";

/* eslint-disable react/prop-types */
function EditDeleteButton({ theSection, idElement }) {
  const { deleteEvent, fetchEvent } = useContext(EventsContext);
  const { deletePoint, fetchPoint } = useContext(PointsContext);
  const { deleteUser, fetchUser } = useContext(UsersContext);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState({});

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

  const sectionFetch =
    theSection === "events"
      ? fetchEvent
      : theSection === "points"
      ? fetchPoint
      : fetchUser;

  const fetchData = async (id) => {
    try {
      const data = await sectionFetch(id);
      console.log(data);
      setData(data);
    } catch {
      notify("Erro ao buscar dados.", "error");
    }
  };

  return (
    <>
      <button
        onClick={async () => {
          await fetchData(idElement);
          setModalIsOpen(true);
        }}
        className="[transition:all_.3s] bg-blue-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
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
      {modalIsOpen && (<DynamicModal
        mode={"edit"}
        entity={theSection}
        data={data}
        idElement={idElement}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />)}
    </>
  );
}

export default EditDeleteButton;
