import arrowIcon from "../../../assets/arrowIcon.svg";

function LoginButton() {
  return (
    <>
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
    </>
  );
}

export default LoginButton;
