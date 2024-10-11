/* eslint-disable react/prop-types */
function ModalFooter({ mode, onCancel, onSubmit }) {
  return (
    <div className="mt-6 flex justify-end space-x-4">
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md" onClick={onCancel}>
        Cancelar
      </button>

      <button type="button" className="inline-flex justify-center px-6 py-2 text-sm font-medium text-white bg-teal-500 border border-transparent rounded-md" onClick={onSubmit}>
        {mode === "edit" ? "Salvar" : "Registrar"}
      </button>
    </div>
  );
}

export default ModalFooter;
