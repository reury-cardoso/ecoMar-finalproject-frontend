import { useState } from "react";
import ModalFooter from "../modals/modalFooter";
import { notify } from "../../notifications";

const inputBaseClasses =
    "border-[1px] border-[solid] border-[#ccc] block w-full rounded-md border-gray-300 shadow-sm focus:outline-none";
  const inputFocusClasses = "focus:ring-0 focus:border-[#00a8a8]";
  const inputPaddingClasses = "py-2 px-4";
  const commonDivClasses = "mb-6";

/* eslint-disable react/prop-types */
function UsersForm({ formData, mode, onCancel, onSubmit }) {
  const [name, setName] = useState(formData.name || "");
  const [email, setEmail] = useState(formData.email || "");
  const [phone, setPhone] = useState(formData.phone || "");
  const [user_type, setUserType] = useState(formData.user_type || "");

  const handleSubmit = async () => {
    try {
      if (!name || !email || !phone || !user_type) {
        notify("Preencha todos os campos.", "error");
        return;
      }
      await onSubmit({ name, email, phone, user_type });
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
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
              placeholder="Digite o telefone"
            />
          </div>
          <div className={commonDivClasses}>
            <label className="block text-sm font-medium text-gray-700">
              Tipo
            </label>
            <select
              name="user_type"
              value={user_type}
              onChange={(e) => setUserType(e.target.value)}
              className={`${inputBaseClasses} ${inputFocusClasses} ${inputPaddingClasses}`}
            >
              <option value="regular">Regular</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
      </div>
      <ModalFooter mode={mode} onCancel={onCancel} onSubmit={handleSubmit} />
    </>
  );
}

export default UsersForm;
