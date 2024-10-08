import ApproveRejectButton from "../actionButtons/approveRejectButton";
import EditDeleteButton from "../actionButtons/editDeleteButton";

/* eslint-disable react/prop-types */
function AdminDataTableBodyPoints({ dataTable }) {

  const actionButtons = dataTable.status === "pending" ? <ApproveRejectButton  theSection={"points"} idElement={dataTable.point_id}/> : <EditDeleteButton theSection={"points"} idElement={dataTable.point_id}/>;

  const statusColor = dataTable.status === "pending" ? "bg-yellow-200 text-yellow-800" : dataTable.status === "approved" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800";

  return (
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">{dataTable.name}</td>
      <td className="py-3 px-6 text-left">{dataTable.location}</td>
      <td className="py-3 px-6 text-left">{dataTable.waste_type}</td>
      <td className="py-3 px-6 text-left">{dataTable.operating_hours}</td>
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
