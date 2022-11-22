import Link from 'next/link'
import styles from '@/styles/Navigation.module.css'

function Navigation () {
  return (
    <span className={styles.container}>
      <Link href='/'>Start</Link> |&nbsp;
      <Link href='/home'>Home</Link> |&nbsp;
      <Link href='/home/cafe'>Cafe</Link> |&nbsp;
      <Link href='/about'>About</Link>
    </span>
  )
}

export default Navigation
