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
  const menuRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const user = localStorage.getItem('name') || 'User'

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
                  {isOpen && <AdminMenu openModal={openModal}/>}
                </div>
              </>
            ) : (
              <LoginButton />
            )}
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
                  href="https://github.com/reury-cardoso/ecoMar-finalproject-frontend"
                  target="_blank"
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
