import ApproveRejectButton from "../actionButtons/approveRejectButton";
import EditDeleteButton from "../actionButtons/editDeleteButton";

/* eslint-disable react/prop-types */
function AdminDataTableBodyPoints({ dataTable }) {
  const actionButtons = dataTable.status === "pendente" ? <ApproveRejectButton /> : <EditDeleteButton />;
  const statusColor = dataTable.status === "pendente" ? "bg-yellow-200 text-yellow-800" : dataTable.status === "aprovado" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800";

  return (
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">{dataTable.nome}</td>
      <td className="py-3 px-6 text-left">{dataTable.localizacao}</td>
      <td className="py-3 px-6 text-left">{dataTable.tipo_residuo}</td>
      <td className="py-3 px-6 text-left">{dataTable.horario_funcionamento}</td>
      <td className="py-3 px-6 text-left">
        <span className={`${statusColor} py-1 px-3 rounded-full text-xs`}>
        {dataTable.status}
        </span>
      </td>
      <td className="py-3 px-6 text-center">
        {actionButtons}
      </td>
    </tr>
  );
}

export default AdminDataTableBodyPoints;
