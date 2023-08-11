import api from "@/api/api"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from './AddFormaPagamentosScreen.module.scss'
import Title from "@/components/Title"

export default function AddFormaPagamentosScreen() {
    const [metodo, setMetodo] = useState('')
    const [taxa, setTaxa] = useState(0.01)
    const router = useRouter()

    console.log(metodo);
    console.log(taxa);


    function salvar() {

        if (taxa === 0) {
            setTaxa(0.1)
        }
        api
            .post('FormaPgto', {
                metodo: metodo,
                ativo: true,
                taxa: taxa
            })
            .then(() => {
                alert('Forma de Pagamento adicionada!')
                router.push('/forma-pgto')

            })
            .catch((err) => {
                alert('Forma de Pagamento NÃO adicionada! Erro: ' + err)
            })
    }

    return (
        <div className={styles.container}>
            <Title rota="/forma-pgto">Adicionar Forma de Pagamento</Title>
            <div className={styles.titulo}>
                <h3>Método</h3>
                <input
                    className={styles.input}
                    placeholder="Escreva o método de pagamento (Exemplo: Mastercard)"
                    value={metodo}
                    onChange={(event) => setMetodo(event.target.value)} />
                <h3>Taxa</h3>
                <input
                    className={styles.input}
                    placeholder="Escreva a taxa (Entre 0,01 0,5)"
                    value={taxa}
                    type="number"
                    onChange={(event) => setTaxa(parseFloat(event.target.value))} />

            </div>
            <button className={styles.botaoSalvar} onClick={() => salvar()}>Salvar</button>
        </div>
    )
}
