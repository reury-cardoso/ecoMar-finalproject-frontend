/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import AdminDataTableBodyPoints from "./points/adminDataTableBodyPoints";
import AdminDataTableBodyUsers from "./users/adminDataTableBodyUsers";
import AdminDataTableBodyEvents from "./events/adminDataTableBodyEvents";

function AdminRightSection({ currentSection }) {

  const headNames = currentSection === "users" ? ["Nome", "Email", "Telefone", "Tipo"] : currentSection === "events" ? ["Nome", "Descricao", "Data", "Local", "Tipo", "Status"] : ["Nome", "Localização", "Tipo", "Horário", "Status"];

  const ComponentTableBody = currentSection === "users" ? AdminDataTableBodyUsers : currentSection === "events" ? AdminDataTableBodyEvents : AdminDataTableBodyPoints;

  const usuarios = [
    { id: 1, Nome: "Ana Silva", Email: "ana.silva@example.com", Telefone: "(11) 91234-5678", Tipo: "Regular" },
    { id: 2, Nome: "Carlos Souza", Email: "carlos.souza@example.com", Telefone: "(21) 92345-6789", Tipo: "Admin" },
    { id: 3, Nome: "Maria Oliveira", Email: "maria.oliveira@example.com", Telefone: "(31) 93456-7890", Tipo: "Regular" },
    { id: 4, Nome: "João Santos", Email: "joao.santos@example.com", Telefone: "(41) 94567-8901", Tipo: "Admin" },
    { id: 5, Nome: "Fernanda Costa", Email: "fernanda.costa@example.com", Telefone: "(51) 95678-9012", Tipo: "Regular" }
  ];
  

  const eventos = [
    {
      id: 1,
      nome: "Dia da Terra",
      descricao: "Dia da Terra é um evento anual celebrado em todo o mundo no dia 22 de abril para demonstrar apoio à proteção ambiental.",
      data: "2024-04-22",
      local: "São Paulo",
      tipo_residuo: "Papel, Plástico",
      status: "pendente",
      criado_por: 101,
      createdAt: "2024-10-01T10:30:00",
      updatedAt: "2024-10-02T08:00:00"
    },
    {
      id: 2,
      nome: "Semana do Meio Ambiente",
      descricao: "A Semana do Meio Ambiente é um evento anual que tem como objetivo promover atividades de conscientização e preservação do meio ambiente.",
      data: "2024-06-05",
      local: "Rio de Janeiro",
      tipo_residuo: "Metal, Vidro",
      status: "aprovado",
      criado_por: 102,
      createdAt: "2024-09-15T12:00:00",
      updatedAt: "2024-09-16T09:30:00"
    },
    {
      id: 3,
      nome: "Dia Mundial do Meio Ambiente",
      descricao: "O Dia Mundial do Meio Ambiente é comemorado em 5 de junho e tem como objetivo principal chamar a atenção de todas as esferas da população para os problemas ambientais.",
      data: "2024-06-05",
      local: "Belo Horizonte",
      tipo_residuo: "Orgânico",
      status: "rejeitado",
      criado_por: 103,
      createdAt: "2024-09-10T11:15:00",
      updatedAt: "2024-09-11T10:00:00"
    },
  ]

  const pontosDeColeta = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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

  const data = currentSection === "users" ? usuarios : currentSection === "events" ? eventos : pontosDeColeta;

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
            {headNames.map((headName) => (
              <th key={headName} className="py-3 px-6 text-left">{headName}</th>
            ))}
            <th className="py-3 px-6 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {data.map((dataItem) => (
            <ComponentTableBody key={dataItem.id} dataTable={dataItem} />
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AdminRightSection;
