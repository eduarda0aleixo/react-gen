// rfce = estrutura inicial do componente

import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem";

export default function Home() {
  // lógica de programação do componente Home pode ser adicionada aqui
  return (
    // Elementos que compoõem o visual do Home
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold"> Seja Bem Vinde!</h2>
            <p className="text-xl">Este é o meu projeto de blog pessoal, onde compartilho meus pensamentos e opiniões sobre diversos assuntos. </p>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões </p>

            <div className="flex justify-around gap-4">
              <div className="rounded text-white border-white border-2 py-2 px-4">
                 <ModalPostagem />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem Página Home"
            className="w-2/3"
            />
          </div>
        </div>
      </div>
       <ListaPostagens />
    </>
  );
}