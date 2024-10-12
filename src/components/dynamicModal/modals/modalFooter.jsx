import { useState } from "react";
import { notify } from "../../notifications";
import loadingSvg from "../../../assets/tubeSpinner.svg";


/* eslint-disable react/prop-types */
function ModalFooter({ mode, onCancel, onSubmit }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await onSubmit();
    } catch {
      notify("Erro ao enviar dados.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 flex justify-end space-x-4">
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md" onClick={onCancel}>
        Cancelar
      </button>

      <button type="button" className="w-[100px] inline-flex justify-center px-6 py-2 text-sm font-medium text-white bg-teal-500 border border-transparent rounded-md" onClick={handleSubmit}>
        {loading ? <img src={loadingSvg} alt="Loading" className="m-auto !h-[15px]" /> : mode === "edit" ? "Salvar" : "Adicionar"}
      </button>
    </div>
  );
}

export default ModalFooter;
