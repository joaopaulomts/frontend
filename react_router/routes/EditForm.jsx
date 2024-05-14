import { useParams, Link } from "react-router-dom"

export default function EditForm() {

    const {id} = useParams();

    return(
        <div>
            <p>Edição do componente {id}</p>
            <button><Link to={'/product'}>Voltar</Link></button>
        </div>
    )
}   