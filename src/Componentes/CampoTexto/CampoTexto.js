import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}`
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
       <div className="campo_texto">
            <label for=""
                className="labelNome">{props.label}
            </label>

            <input
            onChange={aoDigitado}
            required={props.obrigatorio}
            className="inputs"
            type="text"
            name="Nome"
            id="idNome"
            placeholder={placeholderModificada}
            />
        </div>
    );
    
}

export default CampoTexto;