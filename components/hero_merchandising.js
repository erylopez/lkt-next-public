import Image from 'next/image'
import Button from './button'

export default function HeroMerchandising() {
  return (
    <div style={{boxShadow: '0 5px 15px 0 #000000'}}>
      <div className={'h-[600px] w-full bg-cover bg-center overflow-x-hidden xl:h-[25rem] 2xl:h-[32rem] bg-merchandising'}>
        <div className={'h-full w-full px-6 md:px-16 xl:px-28 2xl:px-80'}>
          <div className={'flex flex-col items-center justify-center align-middle space-y-6 py-12 h-full w-full xl:flex-row xl:space-between xl:space-y-0 xl:space-x-12'}>
            <div className={'h-full w-full xl:w-1/3'}>
              <div className={'h-full w-full grow'}>
                <div className={'h-full w-auto flex flex-col items-center justify-center relative xl:hidden'}>
                  <Image
                    className={'object-contain'}
                    src="/remerav3.png"
                    layout="fill"
                    alt="Lokthar tshirt"
                    />
                </div>
                <div className={'hidden h-full w-auto xl:flex flex-col items-center justify-center relative'}>
                  <Image
                    className={'object-contain'}
                    src="/mod2.png"
                    layout="fill"
                    alt="Lokthar tshirt"
                    />
                </div>
              </div>
            </div>
            <div className={'flex flex-col items-center justify-center h-auto w-full text-gray-300 xl:float-right xl:w-2/3'} >
              <div className={'tracking-wider subpixel-antialiased text-center'}>
                <p className={'font-normal 2xl:text-2xl'}>
                  Participa con nuestra comunidad en discord y en twitch, suma puntos y cambialos por recompensas de nuestros partners!
                  Conviertete en un miembro destacado jugando en nuestras guilds y recibe la distincion que mereces!
                </p><br />
                <Button text="Nueva tienda de puntos: proximamente" url="/recruitment" color="bg-[#870823]" border="border-[#870823]" btnSize="btn-xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-merchandising{
          background-image: linear-gradient(#17161a, #27252a, transparent), url('/backgrounds/merch-mobile.png');
        }
        @media (min-width:1024px){
          .bg-merchandising{
            background-image: url('/backgrounds/merch.png');
          }
        }
      `}</style>
    </div>
  )
}