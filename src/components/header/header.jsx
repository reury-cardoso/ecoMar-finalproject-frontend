import "./header.css";
import logo from "../../../public/marreco.svg";
import arrowIcon from "../../assets/arrowIcon.svg";

function Header() {
  return (
    <header>
      <nav className="border-b-2 border-#E0E0E0 px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="EcoMar Logo" />
            <span className="self-center text-[24px] font-bold whitespace-nowrap text-black">
              EcoMar
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="/login"
              className="inline-flex px-[20px] py-[10px] rounded-[60px] bg-[#00A8A8] items-center gap-[5px] text-white text-[16px] font-bold duration-300 hover:bg-[#008C8C] focus:ring-4 focus:ring-gray-300 text-sm lg:px-5 lg:py-2.5 mr-2 focus:outline-none"
            >
              <span>Login</span>
              <img height={18} src={arrowIcon} alt="Icon Arrow" />
            </a>

            <a
              href="/signup"
              className="inline-flex px-[20px] py-[10px] rounded-[60px] bg-[#0A2F51] items-center gap-[5px] text-white text-[16px] font-bold duration-300 hover:bg-[#0A2438] focus:ring-4 focus:ring-gray-300 text-sm lg:px-5 lg:py-2.5 mr-2 focus:outline-none"
            >
              <span>Criar Conta</span>
              <img src={arrowIcon} alt="Icon Arrow" />
            </a>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/points"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Pontos de Coleta
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Eventos
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/reury-cardoso/ecoMar-finalproject-frontend" target="_blank"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
