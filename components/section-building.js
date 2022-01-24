import Image from 'next/image'
import Button from './button'

export default function SectionBuilding(){
  return(
    <div className="h-screen w-full relative bg-cover bg-top" style={{backgroundImage:'linear-gradient(#870823bd, #17161A), url(/backgrounds/page-craft.png)'}}>
      <div className={'h-full w-full flex flex-col items-center justify-center align-middle px-6 md:px-16 xl:px-28 2xl:px-80'}>
        <div className={'flex flex-col space-y-12 items-center justify-center align-middle pt-12'}>
          <h1 className={'uppercase text-center text-gray-300 text-2xl font-bold md:text-3xl xl:text-4xl'}>Esta seccion està siendo crafteada</h1>
          <div className={'transparent h-32 w-32 xl:48 xl:48 2xl:h-56 2xl:w-56 relative hammer-rotate'}>
            <Image
              className={'object-cover'}
              src="/hammer.svg"
              layout="fill"
              alt="hammer icon"
            />
          </div>
          <div>
            <Button text="Volver" url="/" color="bg-[#870823]" border="border-[#870823]" btnSize="btn-sm"/> 
          </div>
        </div>
      </div>
      <style jsx>{`
        .hammer-rotate{
          animation: rotation .6s infinite linear;
        }
        
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(45deg);
          }
        }
          
      `}</style>
    </div>
  )
}