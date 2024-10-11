import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function AdminMenu() {
  const { setToken, isAdmin } = useContext(AuthContext);

  return (
    <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="py-1">
        <a
          href="#editar-perfil"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Editar Perfil
        </a>
        {isAdmin && (
          <a
            href="/admin"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Painel de Controle
          </a>
          )}
        <a onClick={() => {
          localStorage.removeItem('token');
          setToken(null);
          window.location.href = window
        }}
          href=""
          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          Sair
        </a>
        
      </div>
    </div>
  );
}

export default AdminMenu;
