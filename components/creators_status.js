import Image from 'next/image'

export default function CreatorsStatus() {
  return (
    <div className={'bg-[#17161a]  h-auto min-w-full relative'} style={{boxShadow: '0 5px 15px 0 #000000'}}>
      <div className={'flex flex-row flex-grow  h-auto w-auto py-8  px-6 justify-between space-x-4 overflow-x-scroll xl:px-28 2xl:px-80 text-gray-400 text-sm font-bold xl:overflow-x-hidden'}>
        <div className={'flex-shrink-0 justify-items-center text-center'}>
          <a href="http://twitch.tv/arkanyan" target="_blank" rel="noreferrer">
            <div className={'flex flex-col space-y-4 items-center justify-center text-center'}>
              <div className={'relative'}>
                <div className={'relative h-20 w-20 2xl:h-28 2xl:w-28 rounded-full border-4 border-gray-500 '}>
                  <Image
                    className={'object-cover rounded-full'}
                    src="/streamers-avatar/arkanyan.png"
                    layout="fill"
                    alt="arkanyan twitch avatar"
                    
                    />
                </div>
                {/* <div className={'flex absolute -bottom-3 left-0 right-0 justify-center items-center text-center align-middle'}>
                  <div className={'bg-red-600 border-2 border-[#17161a] px-2 py-1 uppercase rounded-md text-xs text-gray-200 font-bold tracking-wider'}>
                    <span>En vivo</span>
                  </div>
                </div> */}
              </div>
              <div className={'flex flex-col space-y-1'}>
                <span>Arkanyan</span>
                <span className={'font-medium'}>Desconectado</span>
              </div>
            </div>
          </a>
        </div>
        <div className={'flex-shrink-0 justify-items-center text-center'}>
          <a href="http://twitch.tv/chubyluby" target="_blank" rel="noreferrer">
            <div className={'flex flex-col space-y-4 items-center justify-center text-center'}>
              <div className={'relative'}>
                <div className={'relative h-20 w-20 2xl:h-28 2xl:w-28 rounded-full border-4 border-gray-500 '}>
                  <Image
                    className={'object-cover rounded-full'}
                    src="/streamers-avatar/chubyLuby.png"
                    layout="fill"
                    alt="chubyluby twitch avatar"
                    />
                </div>
                {/* <div className={'flex absolute -bottom-3 left-0 right-0 justify-center items-center text-center align-middle'}>
                  <div className={'bg-red-600 border-2 border-[#17161a] px-2 py-1 uppercase rounded-md text-xs text-gray-200 font-bold tracking-wider'}>
                    <span>En vivo</span>
                  </div>
                </div> */}
              </div>
              <div className={'flex flex-col space-y-1'}>
                <span>ChubyLuby</span>
                <span className={'font-medium'}>Desconectado</span>
              </div>
            </div>
          </a>
        </div>
        <div className={'flex flex-shrink-0'}>
          <a href="http://twitch.tv/dilongx" target="_blank" rel="noreferrer">
            <div className={'flex flex-col space-y-4 items-center justify-center text-center'}>
              <div className={'relative'}>
                <div className={'relative h-20 w-20 2xl:h-28 2xl:w-28 rounded-full border-4 border-gray-500 '}>
                  <Image
                    className={'object-cover rounded-full'}
                    src="/streamers-avatar/dilongx.png"
                    layout="fill"
                    alt="dilongx twitch avatar"
                    />
                </div>
              </div>
              <div className={'flex flex-col space-y-1'}>
                <span>Dilongx</span>
                <span className={'font-medium'}>Desconectado</span>
              </div>
            </div>
          </a>
        </div>
        <div className={'flex-shrink-0 justify-items-center text-center'}>
          <a href="http://twitch.tv/emii_bba" target="_blank" rel="noreferrer">
            <div className={'flex flex-col space-y-4 items-center justify-center text-center'}>
              <div className={'relative'}>
                 <div className={'relative h-20 w-20 2xl:h-28 2xl:w-28 rounded-full border-4 border-gray-500 '}>
                  <Image
                    className={'object-cover rounded-full'}
                    src="/streamers-avatar/emii_bba.png"
                    layout="fill"
                    alt="emii_bba twitch avatar"
                    />
                </div>
              </div>
              <div className={'flex flex-col space-y-1'}>
                <span>Emii_bba</span>
                <span className={'font-medium'}>Desconectado</span>
              </div>
            </div>
          </a>
        </div>
        <div className={'flex-shrink-0 justify-items-center text-center'}>
          <a href="http://twitch.tv/ltenryuu" target="_blank" rel="noreferrer">
            <div className={'flex flex-col space-y-4 items-center justify-center text-center'}>
              <div className={'relative'}>
                <div className={'relative h-20 w-20 2xl:h-28 2xl:w-28 rounded-full border-4 border-gray-500 '}>
                  <Image
                    className={'object-cover rounded-full'}
                    src="/streamers-avatar/itenryuu.png"
                    layout="fill"
                    alt="ltenryuu twitch avatar"
                    />
                </div>
              </div>
              <div className={'flex flex-col space-y-1'}>
                <span>Itenryuu</span>
                <span className={'font-medium'}>Desconectado</span>
              </div>
            </div>
          </a>
        </div>
        <div className={'flex-shrink-0 justify-items-center text-center'}>
          <a href="http://twitch.tv/monkeyds89" target="_blank" rel="noreferrer">
            <div className={'flex flex-col space-y-4 items-center justify-center text-center'}>
              <div className={'relative'}>
                <div className={'relative h-20 w-20 2xl:h-28 2xl:w-28 rounded-full border-4 border-gray-500'}>
                  <Image
                    className={'object-cover rounded-full'}
                    src="/streamers-avatar/monkds.png"
                    layout="fill"
                    alt="monkeyds89 twitch avatar"
                    />
                </div>
              </div>
              <div className={'flex flex-col space-y-1'}>
                <span>Monkeyds89</span>
                <span className={'font-medium'}>Desconectado</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
