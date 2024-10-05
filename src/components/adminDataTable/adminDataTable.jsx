function AdminDataTable() {
  return (
    <div className="overflow-x-auto border-collapse border border-gray-300 rounded-xl">
      <table className="min-w-full table-auto bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-800 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nome</th>
            <th className="py-3 px-6 text-left">Localização</th>
            <th className="py-3 px-6 text-left">Tipo</th>
            <th className="py-3 px-6 text-left">Horário</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">

          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">Alexander Foley</td>
            <td className="py-3 px-6 text-left">Nova York</td>
            <td className="py-3 px-6 text-left">Reunião</td>
            <td className="py-3 px-6 text-left">08:00 AM</td>
            <td className="py-3 px-6 text-left">
              <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">
                Aprovado
              </span>
            </td>
            <td className="py-3 px-6 text-left">
              <button className="[transition:all_0.1s_ease-out] bg-blue-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Editar
              </button>
              <button className="[transition:all_0.1s_ease-out] bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300">
                Excluir
              </button>
            </td>
          </tr>
      
          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">Brian Lagos</td>
            <td className="py-3 px-6 text-left">São Paulo</td>
            <td className="py-3 px-6 text-left">Chamada de Vídeo</td>
            <td className="py-3 px-6 text-left">10:30 AM</td>
            <td className="py-3 px-6 text-left">
              <span className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-xs">
                Pendente
              </span>
            </td>
            <td className="py-3 px-6 text-left">
              <button className="bg-green-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300">
                Aprovar
              </button>
              <button className="bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300">
                Rejeitar
              </button>
            </td>
          </tr>

          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">Clara Dublin</td>
            <td className="py-3 px-6 text-left">Londres</td>
            <td className="py-3 px-6 text-left">Treinamento</td>
            <td className="py-3 px-6 text-left">02:00 PM</td>
            <td className="py-3 px-6 text-left">
              <span className="bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs">
                Rejeitado
              </span>
            </td>
            <td className="py-3 px-6 text-left">
              <button className="bg-blue-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Editar
              </button>
              <button className="bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300">
                Excluir
              </button>
            </td>
          </tr>
          {/* Linha 4 */}
          <tr className="border-b border-gray-300 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">Sophia Berlin</td>
            <td className="py-3 px-6 text-left">Berlim</td>
            <td className="py-3 px-6 text-left">Entrevista</td>
            <td className="py-3 px-6 text-left">03:45 PM</td>
            <td className="py-3 px-6 text-left">
              <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">
                Aprovado
              </span>
            </td>
            <td className="py-3 px-6 text-left">
              <button className="bg-blue-600 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Editar
              </button>
              <button className="bg-red-600 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminDataTable;
