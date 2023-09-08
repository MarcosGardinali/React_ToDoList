import './Campos.css'

function Campos({valor, aoAlterado, obrigatorio}){

    function aoDigitado(evento){
        aoAlterado(evento.target.value)
    }

    return(
        <div className='campo'>
            <label>Titulo da tarefa</label>
            <input 
            type='text'
            value={valor}
            onChange={aoDigitado} 
            required={obrigatorio}
            placeholder='Digite o nome da tarefa'/>
        </div>
    )
}

export default Campos