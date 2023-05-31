import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavHead from '@/components/NavHead'
import TestNav from '@/components/TestNav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>28ms Officials</title>
        <meta name="keywords" content="28ms, 28ms officials, 28ms official, 28ms official website, 28ms website, 28ms website official, 28ms official " />
        <link rel="icon" type="image/x-icon" href="./assets/28mslogo.jpg"></link>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <NavHead />
      </>
    </>
  )
}
