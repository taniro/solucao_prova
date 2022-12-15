import "./index.css"


const Pessoa = (props) => {
    return <>
        <h1 className="nome">
            Nome {props.nome}
        </h1>
        <h2 className="idade">
            Idade {props.idade}
        </h2>
    </>
}

export default Pessoa;