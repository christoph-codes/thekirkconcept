import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>The Kirk Concept</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello.</h1>
    </div>
  )
}
