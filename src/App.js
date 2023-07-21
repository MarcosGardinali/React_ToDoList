import { useEffect, useState } from "react";
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
    localStorage.setItem("tarefas", JSON.stringify([...tarefas, tarefa]));
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

  function deletarTarefa(id){
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
    localStorage.setItem("tarefas", JSON.stringify(tarefas.filter(tarefa => tarefa.id !== id)));
  }

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  return (
    <div className="App">
      <Cabecalho abrirModal={abrirModal}/>
      <Lista 
        nome={tarefas.nome} 
        id={tarefas.id} 
        aoDeletar={deletarTarefa}
        tarefas ={tarefas}  
      />
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
