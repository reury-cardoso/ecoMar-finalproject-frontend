import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/header";
import { notify } from "../../components/notifications/notifications";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import loadingSvg from "../../assets/tubeSpinner.svg";

const baseUrl = import.meta.env.VITE_URL_API;

function Signup() {
  const { isLogged, isAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (isLogged) {
      notify("Você já está logado!", "success");
  
      async function redirect() {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        await sleep(2000);
        window.location.href = "/points";
      }
      
      redirect();
    }
  }, [isLogged, isAdmin]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
      const phoneRegex = /^\d{10,}$/;
      return phoneRegex.test(phone);
    };

    const isValidPassword = (password) => {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    };

    if (!name.trim()) {
      setLoading(false);
      notify("O nome não pode estar vazio ou conter apenas espaços", "error");
      return;
    }

    if (!isValidEmail(email)) {
      setLoading(false);
      notify("Formato de email inválido", "error");
      return;
    }

    if (!isValidPhone(phone)) {
      setLoading(false);
      notify(
        "O telefone deve conter apenas números e no mínimo 10 dígitos",
        "error"
      );
      return;
    }

    if (!isValidPassword(password)) {
      setLoading(false);
      notify(
        "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial",
        "error"
      );
      return;
    }

    if (!name || !email || !phone || !password) {
      setLoading(false);
      notify("Preencha todos os campos", "error");
      return;
    }

    try {
      await axios.post(`${baseUrl}/api/auth/register`, {
        name,
        email,
        phone,
        password,
      });

      setLoading(false);
      notify("Registrado com sucesso", "success");
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      await sleep(1000);

      window.location.href = "/login";
    } catch {
      setLoading(false);
      notify("Erro ao registrar", "error");
    }
  }

  return (
    <>
      <Header />
      <div className="mt-16 flex items-center justify-center">
        <div className="p-8 max-w-md w-full rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Registrar
          </h2>
          <form className="space-y-4">
            <div className="p-1 flex items-center border border-gray-300 rounded-lg bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>

            <div className="p-1 flex items-center border border-gray-300 rounded-lg bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>

            <div className="p-1 flex items-center border border-gray-300 rounded-lg bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-1 bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>

            <button
              onClick={handleSignup}
              className="w-full bg-[#0A2F51] text-white py-3 rounded-lg hover:bg-[#0A2438] font-bold"
            >
              {loading ? (
                <img src={loadingSvg} alt="loading" className="w-6 h-6 mx-auto" />
              ) : (
                "Registrar"
              )}
            </button>
          </form>

          <div className="text-center mt-6 text-gray-600">
            <p>Já possui uma conta?</p>
            <a
              href="/login"
              className="w-full inline-block mt-2 px-8 py-3 rounded-full border-2 border-gray-400 text-gray-800 hover:bg-gray-200"
            >
              Faça login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
