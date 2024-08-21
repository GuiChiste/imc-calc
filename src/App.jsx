import { useState } from "react"

import { Calculadora } from "./components/Calculadora";
import { Tabela } from "./components/Tabela";
import { Social } from "./components/Social";



export function App() {
  const [conteudoAtivo, setConteudoAtivo] = useState(1);

  const renderConteudo = () => {
    switch (conteudoAtivo) {
      case 1:
        return <Calculadora />;
      case 2:
        return <Tabela />;
      case 3:
        return <Social />;
      default:
        return <Calculadora />;
    }
  };


  return (
    <>
      <header>
        <button onClick={() => setConteudoAtivo(1)}>Calculadora</button>
        <button onClick={() => setConteudoAtivo(2)}>Tabela</button>
        <button onClick={() => setConteudoAtivo(3)}>Social</button>
      </header>
      <main>
        {renderConteudo()}
      </main>
    </>
  )
}

