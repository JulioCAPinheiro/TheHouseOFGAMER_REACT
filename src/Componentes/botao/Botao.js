import "./Botao.css"

const Botao = (props) => {
    return (
        //Props passando propriedade
        <button type="" className="botao">{props.texto}</button>
    );
}

export default Botao;