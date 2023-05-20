import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import withAuth from '@/components/hoc/withAuth'

import HomeScreen from '@/components/screens/home/HomeScreen'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Todos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeScreen />
      </main>
    </>
  )
}

export default withAuth(Home)
