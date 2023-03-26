import Categorias from "../Categorias/Categorias";
import "./Game.css"

const Games = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.jogosCadastrados.length > 0 ) && <section className="jogos" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className="jogosCategorias">
                {props.jogosCadastrados.map
                    (J => <Categorias
                        cordeFundo={props.corPrimaria}
                        key={J.nome}
                        nome={J.nome}
                        Descricao={J.Descricao} 
                        imagem={J.imagem}
                    />)}
            </div>
        </section>
    );
}

export default Games;