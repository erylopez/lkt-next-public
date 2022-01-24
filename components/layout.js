import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Image from 'next/image'
import { useState } from 'react';
export const siteTitle = 'Lokthar - Comunidad gaming de MMOs/RPG/Survival'


export default function Layout({ children }) {
  const [isToggled, setIsToggled] = useState(false);

  function toggleMenu() {
    setIsToggled(!isToggled);
  }

  return (
    <div className={'m-auto relative'}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&family=Rubik:wght@400;700&display=swap" rel="stylesheet"></link>
        <meta
          name="description"
          content="Comunidad Lokthar"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isToggled={isToggled} toggleMenu={toggleMenu}/>
      <main className={`h-full max-w-full overflow-x-hidden transition-all duration-[.8s] ${isToggled ? 'blur-sm opacity-70' : ''}`} style={{fontFamily: 'Rubik'}}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
