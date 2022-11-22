import Link from 'next/link'
import styles from '@/styles/Navigation.module.css'

function Navigation () {
  return (
    <span className={styles.container}>
      <Link href='/home'>Home</Link> |&nbsp;
      <Link href='/about'>About</Link>
    </span>
  )
}

export default Navigation
