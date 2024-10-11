import Header from "../../components/header/header";
import imgMain from "../../../public/image/img-main.svg";

function Home() {
  return (
    <>
    <Header />
      <main className="mt-20 mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="lg:w-3/5 lg:pr-8 text-left">
          <article className="mx-20">
            <h1 className="text-5xl font-semibold tracking-wide text-[#333333] leading-tight mb-6">
              Preservando os Oceanos: <br /> Coleta de Lixo Marítimo com
              Sustentabilidade
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Unimos forças para combater a poluição dos oceanos, promovendo a
              coleta de <br /> lixo marítimo e ações que protegem a vida
              marinha.
            </p>
            <div className="flex gap-4">
              <a
                href="/events"
                className="inline-flex px-8 py-4 rounded-full border-4 border-[#00A8A8] text-[#0A2F51] text-[16px] font-bold duration-300 focus:ring-4 focus:ring-gray-300 text-sm lg:px-10 lg:py-3 focus:outline-none"
              >
                Eventos
              </a>
              <a
                href="/points"
                className="inline-flex px-8 py-4 rounded-full border-4 border-[#00A8A8] text-white text-[16px] font-bold duration-300 hover:text-white bg-[#0A2F51] hover:bg-[#0A2438] focus:ring-4 focus:ring-gray-300 text-sm lg:px-10 lg:py-3 focus:outline-none"
              >
                Visualizar Pontos
              </a>
            </div>
          </article>
        </div>
        <div className="lg:w-2/5 flex justify-center lg:justify-center pt-8">
          <img
            src={imgMain}
            alt="Imagem de coleta de lixo marítimo"
            className="hidden lg:block w-full max-w-md h-auto"
          />
        </div>
      </main>
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-wrap text-center justify-center gap-7 py-8 px-6 lg:py-4 lg:px-10">
          <div className="mx-4">
            <span className="block text-4xl font-bold text-[#333333]">150</span>
            <span className="block text-[#828282]">Pontos Cadastrados</span>
          </div>
          <div className="mx-4">
            <span className="block text-4xl font-bold text-[#333333]">
              9.000
            </span>
            <span className="block text-[#828282]">Usuários Ativos</span>
          </div>
          <div className="mx-4">
            <span className="block text-4xl font-bold text-[#333333]">
              2.500
            </span>
            <span className="block text-[#828282]">Lixo Coletado</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;