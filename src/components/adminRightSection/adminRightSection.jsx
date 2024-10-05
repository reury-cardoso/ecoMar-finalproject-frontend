import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AdminDataTable from "../adminDataTable/adminDataTable";

function AdminRightSection() {
  return (
    <div id="rightSectionHeader" className="w-[84%] bg-[#E0E5EC] p-[24px] ">
      <h1 className="font-bold text-[25px] text-gray-900">Pontos</h1>
      <div className="w-full my-[15px] bg-white border border-gray-400 rounded-md">
        <div className="flex items-center  px-4 py-2">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />{" "}
          <input
            className="w-full pl-2 outline-none border-none text-gray-800 bg-transparent"
            type="text"
            placeholder="Pesquisar por nome"
          />
        </div>
      </div>
      <AdminDataTable />
    </div>
  );
}

export default AdminRightSection;
