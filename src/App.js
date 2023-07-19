import { useState } from "react";
import Cabecalho from "./Componentes/Cabecalho";
import Lista from "./Componentes/Lista";
import ModalTarefa from "./Componentes/ModalTarefa";
import Modal from 'react-modal'
import './App.css'

Modal.setAppElement('#root');

function App() {

  const [tarefas, setTarefas] = useState([])

  function aNovaTarefaAdicionada(tarefa){
    setTarefas([...tarefas, tarefa])
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Cabecalho abrirModal={abrirModal}/>
      <Lista />
      <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        className="modalCaixa"
      >
        <ModalTarefa aTarefaAdicionada={tarefa => aNovaTarefaAdicionada(tarefa)} fecharModal={fecharModal}/>
      </Modal>
    </div>
    </div>
  );
}

export default App;
