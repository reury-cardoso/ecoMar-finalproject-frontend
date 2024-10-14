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
    </>
  );
}

export default LoginButton;
