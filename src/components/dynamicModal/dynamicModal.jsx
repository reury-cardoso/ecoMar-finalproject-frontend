/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function DynamicModal({ mode, entity, data, onSubmit, modalIsOpen, setModalIsOpen }) {
  const [formData, setFormData] = useState(data);

  const closeModal = () => setModalIsOpen(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
    onSubmit(formData);
    closeModal();
  };

  const entityPT = entity === "events" ? "Evento" : entity === "points" ? "Ponto" : "Usuário";

  const renderFormFields = () => {
    const inputBaseClasses =
      "border-[1px] border-[solid] border-[#ccc] block w-full rounded-md border-gray-300 shadow-sm focus:outline-none";
    const inputFocusClasses = "focus:ring-0 focus:border-[#00a8a8]";
    const inputPaddingClasses = "py-2 px-4"; 
    const commonDivClasses = "mb-6";

    switch (entity) {
      case "points":
        return (
          <div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                value={formData.name || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite o nome do ponto"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Localização
              </label>
              <input
                type="text"
                name="localizacao"
                value={formData.location || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite a localização"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Tipo
              </label>
              <input
                type="text"
                name="tipo"
                value={formData.waste_type || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite o tipo"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Horário de Funcionamento
              </label>
              <input
                type="text"
                name="horario_funcionamento"
                value={formData.operating_hours || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite o horário"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={formData.status || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
              >
                <option value="approved">Aprovado</option>
                <option value="pending">Pendente</option>
                <option value="pending">Rejeitado</option>
              </select>
            </div>
          </div>
        );
      case "users":
        return (
          <div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                value={formData.name || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite o nome do usuário"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite o email"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="text"
                name="telefone"
                value={formData.phone || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite o telefone"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Tipo
              </label>
              <select
                name="tipo"
                value={formData.user_type || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
              >
                <option value="regular">Regular</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
        );
      case "events":
      default:
        return (
          <div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Nome do evento
              </label>
              <input
                type="text"
                name="nome"
                value={formData.name || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite o nome do evento"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite a descrição"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Data
              </label>
              <input
                type="date"
                name="data"
                value={formData.date || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Local
              </label>
              <input
                type="text"
                name="local"
                value={formData.location || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
                placeholder="Digite o local"
              />
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Tipo
              </label>
              <select
                name="tipo"
                value={formData.event_type || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
              >
                <option value="festa">Festa</option>
                <option value="coleta">Coleta</option>
                <option value="reuniao">Reunião</option>
              </select>
            </div>
            <div className={commonDivClasses}>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={formData.status || ""}
                onChange={handleChange}
                className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
              >
                <option value="approved">Aprovado</option>
                <option value="pending">Pendente</option>
                <option value="pending">Rejeitado</option>
              </select>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={
          mode === "edit" ? `Editar ${entityPT}` : `Registrar Novo ${entityPT}`
        }
        className="bg-white rounded-lg p-8 w-full max-w-lg mx-auto my-16"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {mode === "edit" ? `Editar ${entityPT}` : `Registrar Novo ${entityPT}`}
        </h2>

        <form>
          <div className="space-y-5">{renderFormFields()}</div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md"
              onClick={closeModal}
            >
              Cancelar
            </button>

            <button
              type="button"
              className="inline-flex justify-center px-6 py-2 text-sm font-medium text-white bg-teal-500 border border-transparent rounded-md"
              onClick={handleSubmit}
            >
              {mode === "edit" ? "Salvar" : "Registrar"}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default DynamicModal;
