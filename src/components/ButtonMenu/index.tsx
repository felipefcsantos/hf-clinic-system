import { ReactNode } from "react"
import styles from './ButtonMenu.module.scss'
import { useRouter } from "next/router"


interface ButtonMenuProps {
  titulo: string,
  icone: ReactNode
  caminho: string
}

export default function ButtonMenu({titulo, icone, caminho} : ButtonMenuProps) {
  const router = useRouter()

  return (
    <div className={styles.container} onClick={() => router.push(caminho)}>
      {icone}
      <p>{titulo}</p>
    </div>
  )
}
