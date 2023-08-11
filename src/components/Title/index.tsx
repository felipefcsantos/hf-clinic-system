import { ReactNode } from 'react'
import styles from './Title.module.scss'
import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface TitleProps {
  children: ReactNode
  rota: string
}

export default function Title({ children, rota }: TitleProps) {
  const router = useRouter()
  return (
    <div style={{display: 'flex'}}>
      <button className={styles.voltar} onClick={() => router.push(rota)}> 
        <ArrowBackIcon/>
      </button>
      <h1 className={styles.titulo}>{children}</h1>
    </div>
  )
}
