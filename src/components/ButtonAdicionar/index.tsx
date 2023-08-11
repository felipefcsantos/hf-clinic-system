import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import styles from  './ButtonAdicionar.module.scss'

interface ButtonAdicionarProps{
    rota: string
}

export default function ButtonAdicionar({rota} :ButtonAdicionarProps) {
    const router = useRouter()

  return (
    <button className={styles.botaoAdicionar} onClick={() => router.push(rota)}>Adicionar</button>
  )
}
