import { useState } from 'react';
import Botao from '../Botao'
import Campos from '../Campos'
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';

function Formulario(props){

    const [nome, setNome] = useState('')

    function aoSalvar(evento){
        evento.preventDefault()
        props.aTarefaAdicionada({
            id: uuidv4(),
            nome,
            check: false
    })
    props.fecharModal()
    setNome('')
    }

    return(
        <section className='formulario'>
            <h2>Criar uma tarefa</h2>
            <form onSubmit={aoSalvar}>
                <Campos
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <Botao>Criar tarefa</Botao>
            </form>
        </section>
    )
}

export default Formulario