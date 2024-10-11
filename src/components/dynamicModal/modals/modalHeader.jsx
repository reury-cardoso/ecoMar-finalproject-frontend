/* eslint-disable react/prop-types */
function ModalHeader({ mode, entity }) {
  const entityPT = entity === "events" ? "Evento" : entity === "points" ? "Ponto" : "Usuário";

  return (
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      {mode === "edit" ? `Editar ${entityPT}` : `Registrar Novo ${entityPT}`}
    </h2>
  );
}

export default ModalHeader;
