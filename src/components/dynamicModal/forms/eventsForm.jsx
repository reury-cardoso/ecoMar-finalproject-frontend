/* eslint-disable react/prop-types */
function EventsForm({ formData, handleChange }) {
  const inputBaseClasses =
    "border-[1px] border-[solid] border-[#ccc] block w-full rounded-md border-gray-300 shadow-sm focus:outline-none";
  const inputFocusClasses = "focus:ring-0 focus:border-[#00a8a8]";
  const inputPaddingClasses = "py-2 px-4";
  const commonDivClasses = "mb-6";
  return (
    <div>
      <div className={commonDivClasses}>
        <label className="block text-sm font-medium text-gray-700">
          Nome do evento
        </label>
        <input
          type="text"
          name="name"
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
        <label className="block text-sm font-medium text-gray-700">Data</label>
        <input
          type="date"
          name="date"
          value={formData.date || ""}
          onChange={handleChange}
          className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
        />
      </div>
      <div className={commonDivClasses}>
        <label className="block text-sm font-medium text-gray-700">Local</label>
        <input
          type="text"
          name="location"
          value={formData.location || ""}
          onChange={handleChange}
          className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
          placeholder="Digite o local"
        />
      </div>
      <div className={commonDivClasses}>
        <label className="block text-sm font-medium text-gray-700">Tipo</label>
        <select
          name="event_type"
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

export default EventsForm;
