import api from '@/api/api'
import React, { useContext, useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Title from '@/components/Title';
import styles from './DentistaScreen.module.scss'
import ButtonAdicionar from '@/components/ButtonAdicionar';
import EditIcon from '@mui/icons-material/Edit';
import IDentista from '@/interface/IDentistas';
import { useRouter } from 'next/router';
import { DadosContext } from '@/context/dados';


export default function DentistaScreen() {
    const [teste, setTeste] = useState('')
    const [teste2, setTeste2] = useState(true)
    const [dentistas, setDentistas] = useState<IDentista[]>([])
    const [loading, setLoading] = useState(false)
    const { dados, setDados } = useContext(DadosContext)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        api
            .get('Dentista?skip=0&take=50')
            .then((response) => setDentistas(response.data))
            .then(() => setLoading(false))
    }, [])

    const abrir = (cro: string) => {
        if (teste2) {
            setTeste(cro)
            setTeste2(!teste2)

        } else {
            setTeste('')
            setTeste2(!teste2)
        }

    }

    const editar = (id: number) => {
        setDados(id)
        router.push('/dentistas/editar')
    }


    return (

        <div className={styles.container}>

            <Title rota='/'>Dentistas</Title>

            {loading
                ? <div className={styles.load}><span className={styles.loader}></span></div>
                : <>
                    <ButtonAdicionar rota='/dentistas/add-dentistas' />

                    {dentistas.map((dentista) => {

                        return (

                            <div key={dentista.idUsuario} className={styles.lista}>
                                <div
                                    className={styles.item}
                                    onClick={() => abrir(dentista.cro)}
                                    style={dentista.atendendo? {}: {border: '2px solid red'}}
                                >
                                    {dentista.cro}
                                    <div className={styles.AO}>
                                        Atendendo:{dentista.atendendo
                                            ? <CheckIcon
                                                color="success" sx={{ px: '1rem' }} />
                                            : <ClearIcon
                                                sx={{ color: 'red', px: '1rem' }} />}
                                        Orçamento:{dentista.orcamento && dentista.atendendo
                                            ? <CheckIcon
                                                color="success" sx={{ px: '1rem' }} />
                                            : <ClearIcon
                                                sx={{ color: 'red', px: '1rem' }} />}
                                    </div>
                                </div>


                                {teste === dentista.cro ?
                                    <div className={styles.semana}>
                                        <p className={styles.diaSemana}>
                                            Segunda-Feira {dentista.segunda
                                                ? <CheckIcon color="success" sx={{ px: '1rem' }} />
                                                : <ClearIcon sx={{ color: 'red', px: '1rem' }} />}
                                        </p>
                                        <p className={styles.diaSemana}>
                                            Terça-Feira {dentista.terceira
                                                ? <CheckIcon color="success" sx={{ px: '1rem' }} />
                                                : <ClearIcon sx={{ color: 'red', px: '1rem' }} />}
                                        </p>
                                        <p className={styles.diaSemana}>
                                            Quarta-Feira {dentista.quarta
                                                ? <CheckIcon color="success" sx={{ px: '1rem' }} />
                                                : <ClearIcon sx={{ color: 'red', px: '1rem' }} />}
                                        </p>
                                        <p className={styles.diaSemana}>
                                            Quinta-Feira {dentista.quinta
                                                ? <CheckIcon color="success" sx={{ px: '1rem' }} />
                                                : <ClearIcon sx={{ color: 'red', px: '1rem' }} />}
                                        </p>
                                        <p className={styles.diaSemana}>
                                            Sexta-Feira {dentista.sexta
                                                ? <CheckIcon color="success" sx={{ px: '1rem' }} />
                                                : <ClearIcon sx={{ color: 'red', px: '1rem' }} />}
                                        </p>
                                        <p className={styles.diaSemana}>
                                            Sábado {dentista.sabado
                                                ? <CheckIcon color="success" sx={{ px: '1rem' }} />
                                                : <ClearIcon sx={{ color: 'red', px: '1rem' }} />}
                                        </p>
                                        <p className={styles.diaSemana}>
                                            Domingo {dentista.domingo
                                                ? <CheckIcon color="success" sx={{ px: '1rem' }} />
                                                : <ClearIcon sx={{ color: 'red', px: '1rem' }} />}
                                        </p>

                                        <button className={styles.botaoEditar} onClick={() => editar(dentista.idUsuario)}> <EditIcon /> </button>
                                    </div> : ''}
                            </div>
                        )
                    })}
                </>}
        </div>

    )
}
