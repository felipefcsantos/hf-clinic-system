import api from '@/api/api'
import Title from '@/components/Title'
import { DadosContext } from '@/context/dados'
import IDentista from '@/interface/IDentistas'
import React, { useContext, useEffect, useState } from 'react'
import styles from './EditarDentistas.module.scss'
import { useRouter } from 'next/router'

export default function EditarDentistas() {
    const { dados, setDados } = useContext(DadosContext)
    const [dentista, setDentista] = useState<IDentista>()
    const [cro, setCro] = useState('')
    const [segunda, setSegunda] = useState(false)
    const [terca, setTerca] = useState(false)
    const [quarta, setQuarta] = useState(false)
    const [quinta, setQuinta] = useState(false)
    const [sexta, setSexta] = useState(false)
    const [sabado, setSabado] = useState(false)
    const [domingo, setDomingo] = useState(false)
    const [orcamento, setOrcamento] = useState(false)
    const [atendimento, setAtndimento] = useState(false)
    const router = useRouter()

    useEffect(() => {
        api
            .get(`Dentista/${dados}`)
            .then((response) => {
                setCro(response.data.cro)
                setSegunda(response.data.segunda)
                setTerca(response.data.terceira)
                setQuarta(response.data.quarta)
                setQuinta(response.data.quinta)
                setSexta(response.data.sexta)
                setSabado(response.data.sabado)
                setDomingo(response.data.domingo)
                setOrcamento(response.data.orcamento)
                setAtndimento(response.data.atendendo)
            })

    }, [dados])



    const salvar = () => {
        api
            .put(`Dentista/${dados}`, {
                cro: cro,
                segunda: segunda,
                terceira: terca,
                quarta: quarta,
                quinta: quinta,
                sexta: sexta,
                sabado: sabado,
                domingo: domingo,
                orcamento: orcamento,
                atendendo: atendimento
            })

            router.push('/dentistas')
    }
    return (
        <div className={styles.container}>
            <Title rota='/dentistas'>Editar Dentista</Title>

            <form className={styles.formulario}>
                <div>
                    <label>Nome:</label>
                    <input type='text' className={styles.nome} required value={cro} onChange={(event) => setCro(event.target.value)} />
                    <label>CRO:</label>
                    <input type='text' />
                </div>
                <h4>Selecione os dias da semana em que ele(a) trabalha:</h4>
                <div>
                    <label>Segunda-Feira</label>
                    <input type='checkbox' checked={segunda} onChange={() => setSegunda(!segunda)} />
                    <label>Terça-Feira</label>
                    <input type='checkbox' checked={terca} onChange={() => setTerca(!terca)} />
                    <label>Quarta-Feira</label>
                    <input type='checkbox' checked={quarta} onChange={() => setQuarta(!quarta)} />
                    <label>Quinta-Feira</label>
                    <input type='checkbox' checked={quinta} onChange={() => setQuinta(!quinta)} />
                    <label>Sexta-Feira</label>
                    <input type='checkbox' checked={sexta} onChange={() => setSexta(!sexta)} />
                    <label>Sábado</label>
                    <input type='checkbox' checked={sabado} onChange={() => setSabado(!sabado)} />
                    <label>Domingo</label>
                    <input type='checkbox' checked={domingo} onChange={() => setDomingo(!domingo)} />
                </div>
                <h4>Marque caso este(a) dentista possa fazer orçamentos:</h4>
                <label>Faz orçametos?</label>
                <input type='checkbox' checked={orcamento} onChange={() => setOrcamento(!orcamento)} />
                <h4>Marque caso este(a) dentista esteja atendendo:</h4>
                <label>Está atendendo?</label>
                <input type='checkbox' checked={atendimento} onChange={() => setAtndimento(!atendimento)} />
                <div>
                    <button className={styles.botaoSalvar} onClick={salvar}>Salvar</button>
                </div>
            </form>
        </div>
    )
}
