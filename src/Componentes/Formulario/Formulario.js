import { useState } from "react";
import Botao from "../botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import "./Formulario.css"

import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [Descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogoCadastrado({
            nome,
            Descricao,
            imagem,
            categoria
        })
        setNome("")
        setDescricao("")
        setImagem("")
        setCategoria("")
    }

    return (
        <section className="principal_formulario">
            <form onSubmit={aoSalvar} className="principal_formulario_form">
                <h2>Preenche os dados para cadastrar o jogo</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do Jogo"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
               />
                <CampoTexto
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Digite a descrição do jogo"
                    valor={Descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Categorias"
                    itens={props.categoriasDeJogos}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />

                <Botao texto="Cadastrar Jogo" />
            </form>
        </section>
    );
}

export default Formulario;