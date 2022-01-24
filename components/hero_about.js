import Image from 'next/image'
import Button from './button'

export default function HeroAbout(){
  return (
    <div className={'h-[80vh] w-full bg-gradient-to-r from-[#17161a] via-[#27252a] to-[#17161a] md:h-[65vh] xl:h-[80vh] 2xl:h-[70vh]'} >
      <div className={'w-full h-full relative pt-12'} >
        <div className={'px-6 pt-44 h-full w-full bg-cover bg-top text-center bg-polygon text-white md:px-16 lg:pt-24 lg:px-36 2xl:pt-48'} style={{ backgroundImage:'linear-gradient(#870823bd, #540091), url(/backgrounds/homepage-bg.png)', textShadow: '1px 1px 2px #17161a'}}>
          <div className={'py-4 space-y-6 subpixel-antialiased md:py-12 xl:px-32 2xl:px-80 xl:py-8 2xl:py-6 tracking-wider'}>
            <h1 className={'uppercase text-4xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl'} >
              Lokthar +
            </h1>
            <h3 className={'font-light text-lg uppercase text-gray-200 md:text-lg'}>
              Mas de 4 años jugando juntos, expandiendo la organizacion de la comunidad de MMORPG aun mas!
            </h3>
            <Button text="Conocenos mas" url="/about-us" color="bg-[#870823]" border="border-[#870823]" btnSize="btn-md"/>
          </div>
        </div>
        <div className={'px-6 absolute -bottom-24 left-0 right-0 z-30 justify-between h-auto w-full space-x-2 xl:-bottom-32 md:px-16 xl:px-28 2xl:px-80'}>
          <div className={'flex flex-row justify-between bg-[#17161a] p-3 xl:p-4 md:space-x-4 '} style={{boxShadow:'0 3px 10px black'}}>
            <div className={'hidden relative flex-grow h-42 md:flex 2xl:h-52 2xl:w-72'}>
              <Image
                className={'object-cover object-left'}
                src="/techo.png"
                layout="fill"
                alt="Lokthar photo"
              />
            </div>
            <div className={'hidden relative flex-grow h-42 xl:flex 2xl:h-52 2xl:w-72'}>
              <Image
                className={'object-cover object-left'}
                src="/mediah.png"
                layout="fill"
                alt="Lokthar photo"
              />
            </div>
            <div className={'hidden relative flex-grow h-42 md:flex 2xl:h-52 2xl:w-72'}>
              <Image
                className={'object-cover object-left'}
                src="/valencia2.png"
                layout="fill"
                alt="Lokthar photo"
              />
            </div>
            <div className={'relative h-[180px] flex-grow w-auto md:h-42 md:flex 2xl:h-52 2xl:w-72'}>
              <Image
                className={'object-cover object-left'}
                src="/serendia.png"
                layout="fill"
                alt="Lokthar photo"
              /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}