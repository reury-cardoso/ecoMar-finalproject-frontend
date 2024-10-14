import { useState, useEffect, useRef, useContext } from "react";
import AdminMenu from "../adminMenu";
import logo from "/marreco.svg";
import LoginButton from "./loginButton/loginButton";
import { AuthContext } from "../../context/authContext";
import { ProfileContext } from "../../context/profileContext";
import DynamicModal from "../dynamicModal/dynamicModal";

function Header() {
  const { isLogged } = useContext(AuthContext);
  const { userInfo, getUserInfo, updateUserInfo } = useContext(ProfileContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const openModal = async () => {
    await getUserInfo();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen || menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, menuOpen]);

  const user = localStorage.getItem('name') || 'User';

  return (
    <>
      <header>
        <nav className="border-b-2 border-#E0E0E0 px-4 lg:px-6 py-4">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="EcoMar Logo" />
              <span className="self-center text-[24px] font-bold whitespace-nowrap text-black">
                EcoMar
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              {isLogged ? (
                <>
                  <div
                    onClick={toggleMenu}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <img
                      className="h-[40px] size-9"
                      src={`https://api.dicebear.com/9.x/initials/svg?seed=${user}&radius=50&backgroundColor=00acc1,039be5,00897b,1e88e5,3949ab&backgroundType=gradientLinear,solid&fontFamily=Arial&fontSize=50`}
                      alt="Admin Avatar"
                    />
                    <div>
                      <span className="font-bold">{user}</span>
                      <p className="text-[#5F5E61] text-[12px]">Bem-vindo(a)</p>
                    </div>
                  </div>
                  <div ref={menuRef} className="relative inline-block text-left">
                    {isOpen && <AdminMenu openModal={openModal} />}
                  </div>
                </>
              ) : (
                <LoginButton />
              )}
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={menuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Abrir menu principal</span>
              <svg
                className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
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
                className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
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

            <div
              ref={mobileMenuRef}
              className={`${
                menuOpen ? "block" : "hidden"
              } absolute top-16 left-0 w-full bg-white shadow-md lg:hidden`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium">
                <li>
                  <a
                    href="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/points"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                  >
                    Pontos de Coleta
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                  >
                    Eventos
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/reury-cardoso/ecoMar-finalproject-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                  >
                    Sobre
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
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
                    href="https://github.com/reury-cardoso/ecoMar-finalproject-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
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
      <DynamicModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={closeModal}
        mode="edit"
        entity="users"
        data={userInfo}
        onSubmit={updateUserInfo}
        limit={1}
      />
    </>
  );
}

export default Header;
