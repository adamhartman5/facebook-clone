import Head from 'next/head'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's Build Facebook</h1>
    </div>
  )
}
