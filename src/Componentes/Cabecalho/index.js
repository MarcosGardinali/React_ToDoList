import './Cabecalho.css'
import { FcTodoList } from 'react-icons/fc';
import { IoMdCreate } from 'react-icons/io';


function Cabecalho(props){
    return(
        <header className='cabecalho'>
            <h1><FcTodoList size={25} /> Minha lista de tarefas</h1>
            <button onClick={props.abrirModal}><IoMdCreate />Criar tarefa</button>
        </header>
    )
}

export default Cabecalho