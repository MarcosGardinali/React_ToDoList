import { useState } from 'react';
import './Tarefas.css'
import { AiFillCloseCircle } from 'react-icons/ai'

function Tarefas(props){

    // Variável de estado para acompanhar o status de conclusão da tarefa
  const [concluida, setConcluida] = useState(false);

    // Função para lidar com a alternância do status de conclusão da tarefa
  const lidarComConclusao = () => {
    setConcluida(!concluida);
  };


    return(
       <section className='tarefas'>
        <div>
            <header className={concluida ? 'rodape_concluido' : 'rodape'}>
                <input type='checkbox' onChange={lidarComConclusao} />
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