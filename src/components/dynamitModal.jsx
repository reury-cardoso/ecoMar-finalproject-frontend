/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

export default function DynamicModal({ mode = "edit", entity = "ponto", data = {}, onSubmit }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState(data);

  const openModal = () => setModalIsOpen(true);
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
      case "ponto":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite o nome do ponto"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Localização</label>
              <input
                type="text"
                name="localizacao"
                value={formData.localizacao || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite a localização"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tipo</label>
              <input
                type="text"
                name="tipo"
                value={formData.tipo || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite o tipo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Horário de Funcionamento</label>
              <input
                type="text"
                name="horario_funcionamento"
                value={formData.horario_funcionamento || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite o horário"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={formData.status || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
              >
                <option value="aprovado">Aprovado</option>
                <option value="pendente">Pendente</option>
                <option value="rejeitado">Rejeitado</option>
              </select>
            </div>
          </>
        );
      case "usuario":
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite o nome do usuário"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite o email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Telefone</label>
              <input
                type="text"
                name="telefone"
                value={formData.telefone || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite o telefone"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tipo</label>
              <select
                name="tipo"
                value={formData.tipo || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
              >
                <option value="regular">Regular</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </>
        );
      case "event":
      default:
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome do evento</label>
              <input
                type="text"
                name="nome"
                value={formData.nome || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite o nome do evento"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Descrição</label>
              <textarea
                name="descricao"
                value={formData.descricao || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite a descrição"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Data</label>
              <input
                type="date"
                name="data"
                value={formData.data || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Local</label>
              <input
                type="text"
                name="local"
                value={formData.local || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
                placeholder="Digite o local"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tipo</label>
              <select
                name="tipo"
                value={formData.tipo || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
              >
                <option value="festa">Festa</option>
                <option value="coleta">Coleta</option>
                <option value="reuniao">Reunião</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={formData.status || ''}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm"
              >
                <option value="aprovado">Aprovado</option>
                <option value="pendente">Pendente</option>
                <option value="rejeitado">Rejeitado</option>
              </select>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={openModal}
          className="px-4 py-2 text-white bg-teal-500 rounded-md"
        >
          {mode === "edit" ? "Editar" : "Registrar Novo"} {entity === "event" ? "Evento" : entity === "ponto" ? "Ponto de Coleta" : "Usuário"}
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={mode === "edit" ? `Editar ${entity}` : `Registrar Novo ${entity}`}
        className="bg-white rounded-lg p-8 w-full max-w-lg mx-auto my-16"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {mode === "edit" ? `Editar ${entity}` : `Registrar Novo ${entity}`}
        </h2>

        <form>
          <div className="space-y-5">
            {renderFormFields()}
          </div>

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
