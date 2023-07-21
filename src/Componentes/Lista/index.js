import NenhumaTarefa from '../NenhumaTarefa'
import Tarefas from '../Tarefas'
import './Lista.css'

function Lista(props){
    return(
        (props.tarefas.length > 0) ? <main className='lista'>
            <h3>Suas Tarefas</h3>
            <section className="tarefas-container">
                {props.tarefas.map( tarefa => {
                    return (<Tarefas
                        id={tarefa.id} 
                        key={tarefa.id} 
                        nome={tarefa.nome} 
                        aoDeletar={props.aoDeletar}
                        aoChecar={props.aoChecar}
                        />
                    )
                })}
            </section>    
        </main>
        : <NenhumaTarefa />
    )
}

export default Lista