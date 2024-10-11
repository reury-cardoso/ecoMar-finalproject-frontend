/* eslint-disable react/prop-types */
function PointsForm({ formData, handleChange }) {
  const inputBaseClasses =
    "border-[1px] border-[solid] border-[#ccc] block w-full rounded-md border-gray-300 shadow-sm focus:outline-none";
  const inputFocusClasses = "focus:ring-0 focus:border-[#00a8a8]";
  const inputPaddingClasses = "py-2 px-4";
  const commonDivClasses = "mb-6";

  return (
    <div>
      <div className={commonDivClasses}>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          name="name"
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
          name="location"
          value={formData.location || ""}
          onChange={handleChange}
          className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
          placeholder="Digite a localização"
        />
      </div>
      <div className={commonDivClasses}>
        <label className="block text-sm font-medium text-gray-700">Tipo</label>
        <input
          type="text"
          name="waste_type"
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
          name="operating_hours"
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
}

export default PointsForm;
