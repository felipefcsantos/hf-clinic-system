import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './Header.module.scss'
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter()

  return (
    <header className={styles.container}>
      <button className={styles.button} onClick={() => router.push('/')}>
        <HomeIcon className={styles.item_home} />
      </button>
      <div className={styles.perfilLogout}>
        <div onClick={() => router.push('/perfil')}>
          <AccountCircleIcon className={styles.item} />
        </div>
        <div>
          <LogoutIcon className={styles.item} />
        </div>
      </div>
    </header>

  )
}
