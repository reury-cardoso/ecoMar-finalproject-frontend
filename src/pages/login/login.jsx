import Header from "../../components/header/header";

function Login() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-16">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
            Acesse sua conta
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                E-mail
              </label>
              <div className="p-1 flex items-center border border-gray-300 rounded-md bg-gray-50">
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
                  className="w-full px-4 py-2 text-gray-700 bg-transparent focus:outline-none"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Senha
              </label>
              <div className="p-1 flex items-center border border-gray-300 rounded-md bg-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <input
                  type="password"
                  className="w-full px-4 py-2 text-gray-700 bg-transparent focus:outline-none"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none"
            >
              Entrar
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Não tem uma conta?</p>
            <a
              href="/register"
              className="inline-block mt-2 text-sm font-bold border-2 text-gray-600 border-teal-600 px-4 py-2 rounded-md"
            >
              Registrar-se
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
