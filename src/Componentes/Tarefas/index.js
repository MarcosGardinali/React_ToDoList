import { useState } from 'react';
import './Tarefas.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { ImCheckboxUnchecked } from 'react-icons/im'
import { ImCheckboxChecked } from 'react-icons/im'


    function Tarefas(props){

      function checar(){
        props.aoChecar(id)
    }

    const propsChecar ={
        size: 25,
        onClick: checar
    }

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
                {favorito 
                    ? <ImCheckboxUnchecked {... propsChecar} /> 
                    : <ImCheckboxChecked {... propsChecar}
                />}
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