/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Modal from "react-modal";
import PointsForm from "./forms/pointsForm";
import UsersForm from "./forms/usersForm";
import EventsForm from "./forms/eventsForm";
import ModalHeader from "./modals/modalHeader";
import { UsersContext } from "../../context/UsersContext";
import { PointsContext } from "../../context/PointsContext";
import { EventsContext } from "../../context/eventsContext";
import { notify } from "../notifications";

Modal.setAppElement("#root");

function DynamicModal({
  mode,
  entity,
  data,
  modalIsOpen,
  setModalIsOpen,
}) {
  const formData = data || {};
  const [isClosing, setIsClosing] = useState(false);

  const { addUser, updateUser } = useContext(UsersContext);
  const { addPoint, updatePoint } = useContext(PointsContext);
  const { addEvent, updateEvent } = useContext(EventsContext);

  const id = entity === "users" ? "user_id" : entity === "points" ? "point_id" : "event_id";

  const onSubmitAdd = entity === "users" ? addUser : entity === "points" ? addPoint : addEvent;
  const onSubmitEdit = entity === "users" ? updateUser : entity === "points" ? updatePoint : updateEvent;

  const handleSubmit = async (data) => {
    if (mode === "add") {
      try {
        await onSubmitAdd(data);
        closeModal();
      } catch {
        notify("Erro ao enviar dados.", "error");
      }
    }else {
      try {
        await onSubmitEdit(formData[id], data);
        closeModal();
      } catch {
        notify("Erro ao enviar dados.", "error");
      }
    }
  };

  const closeModal = () => {
    setIsClosing(true); 
    setTimeout(() => {
      setModalIsOpen(false); 
      setIsClosing(false); 
    }, 300);
  };

  const renderFormFields = () => {
    switch (entity) {
      case "points":
        return <PointsForm formData={formData} mode={mode} onCancel={closeModal} onSubmit={handleSubmit}/>;
      case "users":
        return <UsersForm formData={formData} mode={mode} onCancel={closeModal} onSubmit={handleSubmit}/>;
      case "events":
      default:
        return <EventsForm formData={formData} mode={mode} onCancel={closeModal} onSubmit={handleSubmit}/>;
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen || isClosing}
      onRequestClose={closeModal}
      contentLabel={
        mode === "edit" ? `Editar ${entity}` : `Registrar Novo ${entity}`
      }
      className={`bg-white rounded-lg p-8 w-full max-w-lg mx-auto my-16 transform transition-all duration-300 ease-in-out 
        ${modalIsOpen && !isClosing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      overlayClassName={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out 
        ${modalIsOpen && !isClosing ? 'opacity-100' : 'opacity-0'}`}
      closeTimeoutMS={300}
    >
      <ModalHeader mode={mode} entity={entity} />
      <form>
        {renderFormFields()}
      </form>
    </Modal>
  );
}

export default DynamicModal;
