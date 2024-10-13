import { useContext, useState } from "react";
import { EventsContext } from "../../../context/eventsContext";
import { PointsContext } from "../../../context/PointsContext";
import { UsersContext } from "../../../context/UsersContext";
import loadingSvg from "../../../assets/tubeSpinner.svg";
import DynamicModal from "../../dynamicModal/dynamicModal";
import { notify } from "../../notifications";

/* eslint-disable react/prop-types */
function EditDeleteButton({ theSection, idElement }) {
  const { deleteEvent, fetchEvent, updateEvent } = useContext(EventsContext);
  const { deletePoint, fetchPoint, updatePoint } = useContext(PointsContext);
  const { deleteUser, fetchUser, updateUser } = useContext(UsersContext);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingEdit, setIsLoadingEdit] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [onSubmitEntity, setOnSubmitEntity] = useState();
  const [data, setData] = useState({});

  const sectionDelete =
    theSection === "events"
      ? deleteEvent
      : theSection === "points"
      ? deletePoint
      : deleteUser;

  const handleDelete = async (id) => {
    setIsLoadingDelete(true);
    await sectionDelete(id);
    setIsLoadingDelete(false);
  };

  const handleEdit = async (id) => {
    setIsLoadingEdit(true);
    try {
      await fetchData(id);
      const entityMap = {
        events: updateEvent,
        points: updatePoint,
        default: updateUser,
      };
      const onSubmitEntity = entityMap[theSection] || entityMap.default;
      setOnSubmitEntity(() => onSubmitEntity);
      setModalIsOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoadingEdit(false);
    }
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
        onClick={() => handleEdit(idElement)}
        className="[transition:all_.3s] bg-blue-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {isLoadingEdit ? (
          <img src={loadingSvg} alt="Loading" className="m-auto !h-[15px]" />
        ) : (
          "Editar"
        )}
      </button>
      <button
        onClick={() => handleDelete(idElement)}
        className="[transition:all_.3s] bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 w-[60.94px] max-h-[24px]"
      >
        {isLoadingDelete ? (
          <img src={loadingSvg} alt="Loading" className="m-auto !h-[15px]" />
        ) : (
          "Excluir"
        )}
      </button>
      {modalIsOpen && (
        <DynamicModal
          mode={"edit"}
          entity={theSection}
          data={data}
          idElement={idElement}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          onSubmit={onSubmitEntity}
        />
      )}
    </>
  );
}

export default EditDeleteButton;
