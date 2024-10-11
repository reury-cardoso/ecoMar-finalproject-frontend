/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";
import PointsForm from "./forms/pointsForm";
import UsersForm from "./forms/usersForm";
import EventsForm from "./forms/eventsForm";
import ModalFooter from "./modals/modalFooter";
import ModalHeader from "./modals/modalHeader";

Modal.setAppElement("#root");

function DynamicModal({
  mode,
  entity,
  data,
  onSubmit,
  modalIsOpen,
  setModalIsOpen,
}) {
  const [formData, setFormData] = useState(data || {});

  const closeModal = () => setModalIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    closeModal();
  };

  const renderFormFields = () => {
    switch (entity) {
      case "points":
        return <PointsForm formData={formData} handleChange={handleChange} />;
      case "users":
        return <UsersForm formData={formData} handleChange={handleChange} />;
      case "events":
      default:
        return <EventsForm formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel={
        mode === "edit" ? `Editar ${entity}` : `Registrar Novo ${entity}`
      }
      className="bg-white rounded-lg p-8 w-full max-w-lg mx-auto my-16"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <ModalHeader mode={mode} entity={entity} />
      <form>
        <div className="space-y-5">{renderFormFields()}</div>
        <ModalFooter
          mode={mode}
          onCancel={closeModal}
          onSubmit={handleSubmit}
        />
      </form>
    </Modal>
  );
}

export default DynamicModal;
