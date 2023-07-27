import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Gaia Cosmeceuticals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gaia-website-favicon-color.ico" type="image/gif" sizes='16x16' />
      </Head>
      <main className={styles.main}>
        <h1> build </h1>
      </main>
    </>
  )
}
