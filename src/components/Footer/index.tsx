import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.container}>
      <CopyrightIcon/>
      Desenvolvido por Henrique e Felipe
    </div>
  )
}
