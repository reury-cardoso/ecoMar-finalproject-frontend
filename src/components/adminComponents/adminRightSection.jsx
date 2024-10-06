import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AdminDataTableBodyPoints from "./points/adminDataTableBodyPoints";

function AdminRightSection() {
  const pontosDeColeta = [
    {
      id_ponto: 1,
      nome: "Ponto Verde",
      localizacao: "São Paulo",
      tipo_residuo: "Papel, Plástico",
      horario_funcionamento: "08:00 AM - 06:00 PM",
      status: "pendente",
      criado_por: 101,
      createdAt: "2024-10-01T10:30:00",
      updatedAt: "2024-10-02T08:00:00"
    },
    {
      id_ponto: 2,
      nome: "Eco Coleta",
      localizacao: "Rio de Janeiro",
      tipo_residuo: "Metal, Vidro",
      horario_funcionamento: "09:00 AM - 05:00 PM",
      status: "aprovado",
      criado_por: 102,
      createdAt: "2024-09-15T12:00:00",
      updatedAt: "2024-09-16T09:30:00"
    },
    {
      id_ponto: 3,
      nome: "Recicla Já",
      localizacao: "Belo Horizonte",
      tipo_residuo: "Orgânico",
      horario_funcionamento: "07:00 AM - 04:00 PM",
      status: "rejeitado",
      criado_por: 103,
      createdAt: "2024-09-10T11:15:00",
      updatedAt: "2024-09-11T10:00:00"
    },
    {
      id_ponto: 4,
      nome: "Recolhe Fácil",
      localizacao: "Curitiba",
      tipo_residuo: "Eletrônicos",
      horario_funcionamento: "10:00 AM - 07:00 PM",
      status: "pendente",
      criado_por: 104,
      createdAt: "2024-09-20T09:45:00",
      updatedAt: "2024-09-21T08:30:00"
    },
    {
      id_ponto: 5,
      nome: "Coleta Limpa",
      localizacao: "Salvador",
      tipo_residuo: "Papel, Plástico, Vidro",
      horario_funcionamento: "08:30 AM - 05:30 PM",
      status: "aprovado",
      criado_por: 105,
      createdAt: "2024-09-22T14:00:00",
      updatedAt: "2024-09-23T09:00:00"
    },
  ];
  return (
    <div id="rightSectionHeader" className="w-[84%] bg-[#E0E5EC] p-[24px] ml-auto">
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
      <div className="overflow-x-auto border-collapse border border-gray-300 rounded-xl">
      <table className="min-w-full table-auto bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-800 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nome</th>
            <th className="py-3 px-6 text-left">Localização</th>
            <th className="py-3 px-6 text-left">Tipo</th>
            <th className="py-3 px-6 text-left">Horário</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {pontosDeColeta.map((pontoDeColeta) => (
            <AdminDataTableBodyPoints key={pontoDeColeta.id_ponto} dataTable={pontoDeColeta} />
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AdminRightSection;
