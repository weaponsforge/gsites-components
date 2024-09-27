import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Common.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Google Sites Components</title>
        <meta name="keywords" content="gsites-components, Google Sites components, gsites components Google Sites embeddable widgets, cards, card, posts, post" />
        <meta name="description" content="Google Sites Components - utility components that you can embed in your Google Site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to the Posts CMS app.
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.logoContainer}>
            <div className={styles.thirteen}>
              <Image
                src="images/icons/icon-cms.png"
                alt="13"
                width={64}
                height={64}
                priority
              />
            </div>
            <h2>
              Google Sites &quot;Embeddable&quot; Components
            </h2>
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="/cms"
            className={styles.card}
          >
            <h2>
              CMS
            </h2>
            <p>
              Content Management System (CMS) for Posts.
            </p>
          </Link>

          <Link
            href="#"
            className={styles.card}
          >
            <h2>
              Posts
            </h2>
            <p>
              View published Posts here.
            </p>
          </Link>

          <Link
            href="/cards/gallery/?category=puppies"
            className={styles.card}
          >
            <h2>
              File Cards
            </h2>
            <p>
              View File Cards by category here.
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
