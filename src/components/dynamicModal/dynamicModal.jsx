/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
import PointsForm from "./forms/pointsForm";
import UsersForm from "./forms/usersForm";
import EventsForm from "./forms/eventsForm";
import ModalHeader from "./modals/modalHeader";
import { notify } from "../notifications";

Modal.setAppElement("#root");

function DynamicModal({
  mode,
  entity,
  data,
  modalIsOpen,
  setModalIsOpen,
  onSubmit,
  limit
}) {
  const formData = data || {};
  const [isClosing, setIsClosing] = useState(false);

  const id = entity === "users" ? "user_id" : entity === "points" ? "point_id" : "event_id";

  const handleSubmit = async (data) => {
    if (mode === "add") {
      try {
        await onSubmit(data);
        closeModal();
      } catch {
        notify("Erro ao enviar dados.", "error");
      }
    }else {
      try {
        await onSubmit(formData[id], data);
        closeModal();
      } catch(e) {
        notify("Erro ao enviar dados.", "error");
        console.log(e);
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
        return <UsersForm limit={limit} formData={formData} mode={mode} onCancel={closeModal} onSubmit={handleSubmit}/>;
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
