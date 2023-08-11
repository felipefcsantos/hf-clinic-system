import Title from '@/components/Title'
import styles from './AddDentistaScreen.module.scss'
import api from '@/api/api'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function AddDentistasScreen() {
    const [cro, setCro] = useState('')
    const [segunda, setSegunda] = useState(false)
    const [terca, setTerca] = useState(false)
    const [quarta, setQuarta] = useState(false)
    const [quinta, setQuinta] = useState(false)
    const [sexta, setSexta] = useState(false)
    const [sabado, setSabado] = useState(false)
    const [domingo, setDomingo] = useState(false)
    const [orcamento, setOrcamento] = useState(false)
    const router = useRouter()


    const salvar = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        api
            .post('Dentista', {
                cro: cro,
                segunda: segunda,
                terceira: terca,
                quarta: quarta,
                quinta: quinta,
                sexta: sexta,
                sabado: sabado,
                domingo: domingo,
                orcamento: orcamento,
                atendendo: true
            })
            .then(() => {
                alert('Dentista adicionado com sucesso!')
            })
            .catch((err) => {
                alert('Não foi possíel adicionar o novo dentista! Erro: ' + err)
            })

            router.push('/dentistas')
    }
    return (
        <div className={styles.container}>
            <Title rota='/dentistas'>Adicionar Dentistas</Title>
            <form className={styles.formulario}>
                <div>
                    <label>Nome:</label>
                    <input type='text' className={styles.nome} required value={cro} onChange={(event) => setCro(event.target.value)}/>
                    <label>CRO:</label>
                    <input type='text' />
                </div>
                <h4>Selecione os dias da semana em que ele(a) trabalha:</h4>
                <div>
                    <label>Segunda-Feira</label>
                    <input type='checkbox' onChange={() => setSegunda(!segunda)}/>
                    <label>Terça-Feira</label>
                    <input type='checkbox' onChange={() => setTerca(!terca)}/>
                    <label>Quarta-Feira</label>
                    <input type='checkbox' onChange={() => setQuarta(!quarta)}/>
                    <label>Quinta-Feira</label>
                    <input type='checkbox' onChange={() => setQuinta(!quinta)}/>
                    <label>Sexta-Feira</label>
                    <input type='checkbox' onChange={() => setSexta(!sexta)}/>
                    <label>Sábado</label>
                    <input type='checkbox' onChange={() => setSabado(!sabado)}/>
                    <label>Domingo</label>
                    <input type='checkbox' onChange={() => setDomingo(!domingo)}/>
                </div>
                <h4>Marque caso este(a) dentista possa fazer orçamentos:</h4>
                <label>Faz orçametos?</label>
                <input type='checkbox' onChange={() => setOrcamento(!orcamento)}/>
                <div>
                    <button className={styles.botaoSalvar} onClick={salvar}>Salvar</button>
                </div>
            </form>
        </div>
    )
}
