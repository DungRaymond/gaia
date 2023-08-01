import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeBrowserView from '@/views/browsers/Home'
import useMediaQuery from '@mui/material/useMediaQuery';
import dynamic from 'next/dynamic';


const inter = Inter({ subsets: ['latin'] })

const DynamicBrowserHome = dynamic(() => import('@/views/browsers/Home'), {
  loading: () => <p>Loading...</p>,
})
const DynamicMobileHome = dynamic(() => import('@/views/mobiles/Home'), {
  loading: () => <p>Loading...</p>,
})


export default function Home() {
  const matches = useMediaQuery('(max-width: 414px)')
  if(!matches) {
    return (
      <>
        <Head>
          <title>Gaia Cosmeceuticals</title>
          <meta name="description" content="Gaia Cosmeceuticals" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" type="image/gif" sizes='32x32' />
        </Head>
        <main className={styles.main}>
          <DynamicBrowserHome/>
        </main>
      </>
    )
  } else {
    return (
      <>
        <main>
          <DynamicMobileHome>
            
          </DynamicMobileHome>
        </main>
      </>
    )
  }
}
