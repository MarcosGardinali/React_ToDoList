import Formulario from '../Formulario'
import './Modal.css'

function ModalTarefa(props){
    return(
        <section className='modal'>
            <Formulario aTarefaAdicionada={props.aTarefaAdicionada} fecharModal={props.fecharModal} />
        </section>
    )
}

export default ModalTarefa