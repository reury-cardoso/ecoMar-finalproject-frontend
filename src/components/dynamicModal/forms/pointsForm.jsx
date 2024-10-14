import { useState } from "react";
import ModalFooter from "../modals/modalFooter";
import { notify } from "../../notifications";

const inputBaseClasses =
    "border-[1px] border-[solid] border-[#ccc] block w-full rounded-md border-gray-300 shadow-sm focus:outline-none";
  const inputFocusClasses = "focus:ring-0 focus:border-[#00a8a8]";
  const inputPaddingClasses = "py-2 px-4";
  const commonDivClasses = "mb-6";

/* eslint-disable react/prop-types */
function PointsForm({ formData, mode, onCancel, onSubmit, limit }) {
  const [name, setName] = useState(formData.name || "");
  const [location, setLocation] = useState(formData.location || "");
  const [waste_type, setWasteType] = useState(formData.waste_type || "");
  const [operating_hours, setOperatingHours] = useState(formData.operating_hours || "");
  const [status, setStatus] = useState(formData.status || "");

  const handleSubmit = async () => {
    try {
      if (!name || !location || !waste_type || !operating_hours) {
        notify("Preencha todos os campos.", "error");
        return;
      }
      await onSubmit({ 
        name, 
        location, 
        waste_type, 
        operating_hours, 
        ...(status && { status })
      });
    } catch(e) {
      console.log(e);
      notify("Erro ao enviar dados.", "error");
    }
  };

  return (
    <>
      <div className="space-y-5">
        <div>
          <div className={commonDivClasses}>
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
              name="waste_type"
              value={waste_type || ""}
              onChange={(e) => setWasteType(e.target.value)}
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
              name="operating_hours"
              value={operating_hours}
              onChange={(e) => setOperatingHours(e.target.value)}
              className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
              placeholder="Digite o horário"
            />
          </div>
          {limit !== 1 && <div className={commonDivClasses}>
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
          </div>}
        </div>
      </div>
      <ModalFooter mode={mode} onCancel={onCancel} onSubmit={handleSubmit} />
    </>
  );
}

export default PointsForm;
