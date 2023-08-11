import api from '@/api/api'
import React, { useEffect, useState } from 'react'
import styles from './FormaPagamentosScreen.module.scss'
import { useRouter } from 'next/router'
import Title from '@/components/Title'
import ButtonAdicionar from '@/components/ButtonAdicionar'

interface FormaPgtoProps {
    metodo: string,
    ativo: boolean,
    taxa: number,
    idFormaDePagamento: number
}

export default function FormaPagamentosScreen() {
    const [formaPgto, setFormaPgto] = useState<FormaPgtoProps[]>([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()


    useEffect(() => {
        setLoading(true)
        api
            .get('FormaPgto?skip=0&take=50')
            .then((response) => setFormaPgto(response.data))
            .then(() => setLoading(false))
            .catch((err) => {
                alert('Ocorreu um erro: ' + err)
            })

    }, [])

    function desativar(id: number, metodo: string, taxa: number) {

        if (taxa === 0) {
            taxa = 0.1
        }
        api
            .put(`FormaPgto/${id}`, {
                metodo: metodo,
                ativo: false,
                taxa: taxa
            })
            .then(() => {
                alert('Forma de Pagamento DESATIVADA!')
                window.location.reload()

            })
    }

    function ativar(id: number, metodo: string, taxa: number) {

        if (taxa === 0) {
            taxa = 0.1
        }
        api
            .put(`FormaPgto/${id}`, {
                metodo: metodo,
                ativo: true,
                taxa: taxa
            })
            .then(() => {
                alert('Forma de Pagamento ATIVADA!')
                window.location.reload()

            })
    }


    return (
        <div className={styles.container}>
            <Title rota='/'>Formas de Pagmentos</Title>
            {loading ? <div className={styles.load}><span className={styles.loader}></span></div> :
                <div>
                   <ButtonAdicionar rota='/forma-pgto/add-forma-pgto'/>
                    <ul>
                        {formaPgto?.map((response) => {
                            return (
                                
                                <li key={response?.idFormaDePagamento} className={response.ativo? styles.subTitulo : styles.subTituloDesativado}>
                                    <div className={styles.dados}>
                                        <h4 className={styles.item}>Método </h4>
                                        {response?.metodo}
                                        <h4 className={styles.item}>Taxa </h4>
                                        {response?.taxa}
                                    </div>
                                    <div>
                                        {response?.ativo
                                            ? <button
                                                className={styles.botaoDesativar}
                                                onClick={() => {
                                                    desativar(
                                                        response.idFormaDePagamento,
                                                        response.metodo,
                                                        response.taxa)
                                                }}
                                            >Desativar
                                            </button>
                                            : <button
                                                className={styles.botaoAtivar}
                                                onClick={() => {
                                                    ativar(
                                                        response.idFormaDePagamento,
                                                        response.metodo,
                                                        response.taxa)
                                                }}
                                            >Ativar
                                            </button>
                                        }

                                    </div>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
}
