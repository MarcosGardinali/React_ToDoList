import { useEffect, useState } from 'react';
import './Tarefas.css'
import { AiFillCloseCircle } from 'react-icons/ai'

function Tarefas(props){

    // Variável de estado para acompanhar o status de conclusão da tarefa
    const [concluida, setConcluida] = useState(props.check || false);

    useEffect(() => {
      const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
      const tarefaEncontrada = tarefasSalvas.find((tarefa) => tarefa.id === props.id);
      if (tarefaEncontrada) {
        setConcluida(tarefaEncontrada.check);
      }
    }, [props.id]);

    // Função para lidar com a alternância do status de conclusão da tarefa
  const lidarComConclusao = () => {
    setConcluida(!concluida);
  };

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
    const tarefaAtualizada = tarefasSalvas.map((tarefa) => {
      if (tarefa.id === props.id) {
        return { ...tarefa, check: concluida };
      }
      return tarefa;
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefaAtualizada));
  }, [concluida, props.id]);


    return(
       <section className='tarefas'>
        <div>
            <header className={concluida ? 'cabecalho__tarefa__concluido' : 'cabecalho__tarefa'}>
                <input type='checkbox' onChange={lidarComConclusao} checked={concluida} />
                <h4>{props.nome}</h4>
            </header>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => props.aoDeletar(props.id)} />
        </div> 
       </section>
    )
}

export default Tarefas