import { useState } from "react";
import Banne from "./Componentes/Banner/Banne";
import Formulario from "./Componentes/Formulario/Formulario";
import Games from "./Componentes/Game/Games";
import Rodape from "./Componentes/Rodape/Rodape";

function App() {

  const jogos = [
    {
      nome: "RPG",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9"
    },
    {
      nome: "FPS",
      corPrimaria: "#82cffa",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "AÇÃO",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "TERROR",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
  ]

  const [jogoCADASTRADO, setjogoCADASTRADO] = useState([])

  const aoNovoCadastrarColaborador = (CadastroJogo) => {
    setjogoCADASTRADO([...jogoCADASTRADO, CadastroJogo])
  }

  return (
    <div className="App">
      <Banne />
      <Formulario
        categoriasDeJogos={jogos.map(categoriasDeJogos => categoriasDeJogos.nome)}
        aoJogoCadastrado={jogo => aoNovoCadastrarColaborador(jogo)}
      />

      {jogos.map(J => <Games
        key={J.nome}
        nome={J.nome}
        corPrimaria={J.corPrimaria}
        corSecundaria={J.corSecundaria}
        jogosCadastrados={jogoCADASTRADO.filter(jogosCadastrados => jogosCadastrados.categoria === J.nome)}
        />)}

        <Rodape/>
    </div>
  );
}

export default App;
