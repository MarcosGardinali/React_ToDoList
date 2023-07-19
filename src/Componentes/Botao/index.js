import './Botao.css'

function Botao(props){
    return(
        <button onClick={props.fecharModal} className="botao">Adicionar Tarefa</button>
    )
}

export default Botao