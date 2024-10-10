import EditDeleteButton from "../actionButtons/editDeleteButton";

/* eslint-disable react/prop-types */
function AdminDataTableBodyUsers({ dataTable }) {
  const typeColor = dataTable.Tipo === "regular" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800";

  return (
    <tr className="border-b border-gray-300 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">{dataTable.name}</td>
      <td className="py-3 px-6 text-left">{dataTable.email}</td>
      <td className="py-3 px-6 text-left">{dataTable.phone}</td>
      <td className="py-3 px-6 text-left">
        <span className={`${typeColor} py-1 px-3 rounded-full text-xs`}>
        {dataTable.user_type}
        </span>
      </td>
      <td className="py-3 px-6 text-center">
      <EditDeleteButton theSection={"users"} idElement={dataTable.user_id} />
      </td>
    </tr>
  );
}

export default AdminDataTableBodyUsers;
