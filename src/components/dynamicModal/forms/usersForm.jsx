/* eslint-disable react/prop-types */
function UsersForm({ formData, handleChange }) {
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
          placeholder="Digite o nome do usuário"
        />
      </div>
      <div className={commonDivClasses}>
        <label className="block text-sm font-medium text-gray-700">Email</label>
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
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
          placeholder="Digite o telefone"
        />
      </div>
      <div className={commonDivClasses}>
        <label className="block text-sm font-medium text-gray-700">Tipo</label>
        <select
          name="user_type"
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
}

export default UsersForm;
