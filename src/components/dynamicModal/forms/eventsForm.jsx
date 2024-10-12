import { useState } from "react";
import ModalFooter from "../modals/modalFooter";
import { notify } from "../../notifications";

const inputBaseClasses =
  "border-[1px] border-[solid] border-[#ccc] block w-full rounded-md border-gray-300 shadow-sm focus:outline-none";
const inputFocusClasses = "focus:ring-0 focus:border-[#00a8a8]";
const inputPaddingClasses = "py-2 px-4";
const commonDivClasses = "mb-6";

/* eslint-disable react/prop-types */
function EventsForm({ formData, mode, onCancel, onSubmit }) {
  const [name, setName] = useState(formData.name || "");
  const [description, setDescription] = useState(formData.description || "");
  const [date, setDate] = useState(formData.date || "");
  const [location, setLocation] = useState(formData.location || "");
  const [event_type, setEventType] = useState(formData.event_type || "");
  const [status, setStatus] = useState(formData.status || "");

  const handleSubmit = async () => {
    try {
      if (!name || !description || !date || !location || !event_type || !status) {
        notify("Preencha todos os campos.", "error");
        return;
      }
      await onSubmit({ name, description, date, location, event_type, status });
    } catch {
      notify("Erro ao enviar dados.", "error");
    }
  };

  return (
    <>
      <div className="space-y-5">
        <div>
          <div className={commonDivClasses}>
            <label className="block text-sm font-medium text-gray-700">
              Nome do evento
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
            />
          </div>
          <div className={commonDivClasses}>
            <label className="block text-sm font-medium text-gray-700">
              Local
            </label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
              placeholder="Digite o local"
            />
          </div>
          <div className={commonDivClasses}>
            <label className="block text-sm font-medium text-gray-700">
              Tipo
            </label>
            <select
              name="event_type"
              value={event_type}
              onChange={(e) => setEventType(e.target.value)}
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
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
            >
              <option value="approved">Aprovado</option>
              <option value="pending">Pendente</option>
              <option value="pending">Rejeitado</option>
            </select>
          </div>
        </div>
      </div>

      <ModalFooter mode={mode} onCancel={onCancel} onSubmit={handleSubmit} />
    </>
  );
}

export default EventsForm;
