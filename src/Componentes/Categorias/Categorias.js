import "./Categorias.css"

const Categorias = (props, corDeFundo) => {
    return (
        <div className="Categorias">
            <div className="cabecalho" cor={props.cordeFundo}>
                <img src={props.imagem} alt={props.nome} />
            </div>

            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.Descricao}</h5>
            </div>
        </div>
    );
}

export default Categorias;