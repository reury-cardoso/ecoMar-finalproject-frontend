import ApproveRejectButton from "../actionButtons/approveRejectButton";
import EditDeleteButton from "../actionButtons/editDeleteButton";

/* eslint-disable react/prop-types */
function AdminDataTableBodyEvents({ dataTable }) {
  
  const actionButtons = dataTable.status === "pending" ? <ApproveRejectButton theSection={"events"} idElement={dataTable.event_id} /> : <EditDeleteButton theSection={"events"} idElement={dataTable.event_id}/>;
  
  const statusColor = dataTable.status === "pending" ? "bg-yellow-200 text-yellow-800" : dataTable.status === "approved" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800";

  return (
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">{dataTable.name}</td>
      <td className="py-3 px-6 text-left">{dataTable.description}</td>
      <td className="py-3 px-6 text-left">{dataTable.date}</td>
      <td className="py-3 px-6 text-left">{dataTable.location}</td>
      <td className="py-3 px-6 text-left">{dataTable.event_type}</td>
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

export default AdminDataTableBodyEvents;
