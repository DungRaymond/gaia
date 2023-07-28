import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeBrowserView from '@/views/browsers/Home'
import useMediaQuery from '@mui/material/useMediaQuery';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const matches = useMediaQuery('(max-width: 414px)')
  if(!matches) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Gaia Cosmeceuticals" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" type="image/gif" sizes='32x32' />
        </Head>
        <main className={styles.main}>
          <HomeBrowserView/>
        </main>
      </>
    )
  }
}
