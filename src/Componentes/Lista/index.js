import NenhumaTarefa from '../NenhumaTarefa'
import Tarefas from '../Tarefas'
import './Lista.css'

function Lista(props){
    return(
        (props.tarefas.length > 0) ? <section className='lista'>
            <h3>Suas Tarefas</h3>
                {props.tarefas.map( tarefa => {
                    return (<Tarefas
                        id={tarefa.id} 
                        key={tarefa.id} 
                        nome={tarefa.nome} 
                        aoDeletar={props.aoDeletar}
                        />
                    )
                })}
        </section>
        : <NenhumaTarefa />
    )
}

export default Lista