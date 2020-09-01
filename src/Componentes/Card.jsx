import React, { useState } from "react";
import Busca from "./Busca";
import Condicional from "./Condicional"
import "../css/Card.css";

export default (props) => {
    // useState é um função que retorna um Array, por isso o const [valor, setValor], pq a gente tá fazendo algo chamado "destruir", que no caso é, o array tem 2 indicies, 0 e 1, o useState retorna no indice 0 o valor da variável, e no indicie 1 ele retorna um método que atualiza o valor e faz o refresh, o parâmetro que vai no useState("esse aqui") é o valor inicial da variável.

    // Ai é por isso que a gente usa [valor, setValor], pq a gente diz pro javascript que os indicies iguais vão receber o retorno igual, no caso indice 0 recebe o valor da variavel e indice 1 o método, sq o nome que a gente coloca no [] passa a ser o nome que a gente vai usar pra se referenciar quando quiser o valor ou o método
    const [valor, setValor] = useState("");
    const [titulo, setTitulo] = useState(props.titulo);
    const [caminho, setCaminho] = useState(props.caminho);
    const [altImg, setAltImg] = useState(props.altImg);
    const [legenda, setLegenda] = useState(props.legenda);

    // Aqui é a função que recebe o objeto com os dados do pokémon e coloca eles no html, a gente tá usando os set que a gente definiu lá em cima pra isso
    function renderizarPokemon(pokemon) {
        // O titulo tá passando pelo replace pq alguns pokemons vem assim Mr-Mime, Nidoran-M, Nidoran-F, ai eu tô removendo o "-" e adicionando um " ", só pra ficar bonito lá no card
        setTitulo(pokemon.name.replace("-", " "));
        // Aqui eu tô definindo o caminho pra imagem correspondente, as imagens estão na pasta public e tão com o nome do pokemon, igual vem da api, então é só passar o name, pq o img e .png é fixo pra todos
        setCaminho(`img/${pokemon.name}.png`);
        // Aqui é o alt da imagem, pra definir o a descrição da imagem de acordo com o que aparece na imagem né
        setAltImg(pokemon.name);

        // Aqui eu tô pegando os tipos do pokemon e botando num array, botando os nomes só
        const tipos = pokemon.types.map((type) => type.type.name);

        // Aqui eu vejo se o pokemon tem mais de um tipo ou não, tô vendo pelo tamanho do array (length), no caso se for só um tipo ele vai o tamanho de 1, se tiver mais vai ser 2, e não tem pokemon com mais do que 2, então o else cai perfeitinho pra essa situação
        if (tipos.length === 1) {
            setLegenda(
                <span className="tipos">
                    <span className={tipos[0]}>{tipos[0]}</span>
                </span>
            );
        } else {
            setLegenda(
                <span className="tipos">
                    <span className={tipos[0]}>{`${tipos[0]} `}</span>|
                    <span className={tipos[1]}>{` ${tipos[1]}`}</span>
                </span>
            );
        }
    }

    async function fetchPokemon(id) {
        // Aqui faz a requisição do pokemon, é praticamente a mesma coisa que tá no outro projeto de vocês
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();
        // Muda essa função aqui, que é a função ali de cima
        renderizarPokemon(pokemon);
    }

    function atualizarValor(evento) {
        // Isso aqui é pra poder alterar o valor do input, isso pq o input vai estar dentro de um outro componente, o valor do input precisa estar dentro desse componente, pq além do input, o botão tbm vai precisar dele, e eu adicionei um botão pq no mobile não tem como apertar "Enter" pra enviar a requisição, o evento é um objeto que vem quando um evento JavaScript é assionado, target é onde o evento tá acontecendo, que no caso é o input, e o value é o valor do input
        setValor(evento.target.value);
    }

    function buscarPokemon(evento) {
        // Aqui rola a busca, como a requisição tá sendo feito com async e await, não tem o bloco .cath() depois do .then() pra capturar os erros, então pra corrigir isso aqui eu coloquei um bloco try catch, try vai executar o código e caso dê um erro ele vai jogar pro catch
        try {
            // E nesse if tá rolando uma validção, pra ver se o valor digitado é dentro dos 151 pokemons e se a tecla apertada foi enter, ou se o evento que aconteceu foi do tipo click, pq no input tá com um evento de keypress, ou seja, quando o usuário apertar alguma tecla, e o botão com o evento de click.
            if ((valor > 0 && valor < 152 && evento.key === "Enter") || evento.type === "click") {
                // Ai se tiver tudo certo ele faz a requisição, o if é importante pra ele não ficar fazendo várias requisições conforme tu digita o numero do pokemon, pq imagine que tu quer buscar o pokemon 123, ele vai fazer uma requisição pro pokemon 1, outra pro pokemon 12, e outra pro pokemon 123, ou quanto tu tiver apagando, vai rolar requisição da mesma forma, sq ao contrário, 123, depois 12, depois 1, depois 0, o zero é o espaço em branco né
                fetchPokemon(valor);
            }
        } catch (erro) {
            // AQui dá um alerta só pra mostrar qual foi o erro, podia botar um modal pra aparecer, ou algum texto vermelho avisando o erro, várias formas, porém não quis mexer nisso por agora
            alert(erro);
        }
    }

    return (
        <div className={`${props.classe} Card`}>
            {/* O h1 recebe o valor do titulo */}
            <h1>{titulo}</h1>
            
            <div className="container-img centralizar">
                {/* A img recebe o caminho e alt */}
                <img src={caminho} alt={altImg}/>
            </div>

            {/* Aqui recebe o texto inicial e os tipos depois de buscar o pokemon */}
            <p>{legenda}</p>
            {/* Aqui é o componente de busca, importa o input e o botão, pra eles a gente passa os métodos de atualizar o valor e o de buscar o pokemon */}
            <Condicional condicao={props.isHome}>
                <Busca eventoChange={atualizarValor} eventoPrincipal={buscarPokemon} />
            </Condicional>
        </div>
    );
}