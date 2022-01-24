import Image from 'next/image'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/client"
import { useState } from 'react';
import useInterval from '@use-it/interval';


export default function Header(props) {
  const [showFirst, setShowFirst] = useState(true);
  const [ session, loading ] = useSession();

  useInterval(() => {
    setShowFirst(!showFirst);
  }, 4000);

  return(
    <div className={'fixed top-0 w-full bg-[#17161a] overflowx-hidden z-50 xl:absolute'} style={{fontFamily: 'Rubik', boxShadow:'0 3px 10px black'}}>
      <div className={'flex h-28 items-center m-auto py-4 px-8 lg:p-0 xl:h-auto'}>
        <div className={'hidden w-full grid-cols-7 py-1 text-gray-300 text-sm subpixel-antialiased text-center lg:grid lg:py-0 lg:px-28 2xl:px-80 2xl:text-sm'}>
          <div className={'flex flex-col col-start-1 col-end-4 skew-x-12 border-l border-gray-600 text-[13px]'}>
            <div className={'-skew-x-12'}>
              <div className={'border-b border-gray-700 h-14 relative overflow-hidden'}>
                <div className={'h-full w-full relative'}>
                  <div className={`h-full w-full absolute top-0 left-0 right-0 bottom-0 transition-all duration-700 ${showFirst ? '' : 'opacity-0'}`}>
                    <Link href="/recruitment">
                      <a>
                        <div className={'flex flex-row h-full w-full items-center justify-center align-middle space-x-4'}>
                          <div className={'h-10 w-10 relative rounded-full'}>
                            <Image
                              className={'object-cover rounded-full'}
                              src="/new-world-logo.jpeg"
                              layout="fill"
                              alt="new world logo"
                              />
                          </div>
                          <p className={'text-gray-400 font-thin'}>Actualmente estamos en New World <span className={'text-[#b621ff] uppercase font-semibold px-2'}> Join us!</span></p> 
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className={`h-full w-full absolute top-0 left-0 right-0 bottom-0 transition-all duration-700 ${showFirst ? 'opacity-0' : ''}`}>
                    <a href="https://discord.gg/uKMzYnbrnX">
                      <div className={'flex flex-row h-full items-center justify-center align-middle space-x-4'}>
                        <div className={'h-10 w-10 relative'}>
                          <Image
                            className={'object-contain'}
                            src="/discord.svg"
                            layout="fill"
                            alt= "discord icon"
                            />
                        </div>
                        <p className={'text-gray-400 font-thin'}>Entra a nuestra comunidad en Discord<span className={'text-[#b621ff] uppercase font-semibold px-2'}> Join </span></p> 
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <ul className={'flex flex-row justify-between uppercase font-bold px-8 tracking-[.06em]'}>
                  <div className={'h-full w-full relative before:absolute before:bottom-0 before:right-0 before:left-0 before:skew-x-12 before:h-1 before:w-full hover:before:bg-[#b621ff] before:transition-all before:duration-800 cursor-pointer'} href="#">
                    <Link href="/">
                      <a><li className={'py-4 px-3 2xl:py-6'}>
                        <span>Home</span>
                      </li></a>
                    </Link>
                  </div>
                  <div className={'h-full w-full relative before:absolute before:bottom-0 before:right-0 before:left-0 before:skew-x-12 before:h-1 before:w-full hover:before:bg-[#b621ff] before:z-20 before:transition-all before:duration-800 cursor-pointer hoverable'} href="#"> 
                    <div className={'w-full relative'}>
                      <li className={'py-4 px-3 2xl:py-6'}>
                        <a>Conocenos</a>
                      </li>
                      <div className={'bg-[#17161a94] bottom-[-8rem] w-[160%] menu-option pt-2'}>
                        <div className={''}>
                          <Link href="/about-us">
                            <a><div>
                              <li className={'p-4 flex space-x-2 items-center align-middle hover:bg-[#b521ff2a]'}>
                                <span className={'text-lg'}>{">"}</span>
                                <span>About Us</span>
                              </li>
                            </div></a>
                          </Link>
                          <Link href="/gallery">
                            <a><div>
                              <li className={'p-4 flex space-x-2 items-center align-middle hover:bg-[#b521ff2a]'}>
                                <span className={'text-lg'}>{">"}</span>
                                <span>Galeria</span>
                              </li>
                            </div></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={'h-full w-full relative before:absolute before:bottom-0 before:right-0 before:left-0 before:skew-x-12 before:h-1 before:w-full hover:before:bg-[#b621ff] before:transition-all before:duration-800 cursor-pointer'} href="#">
                    <Link href="/recruitment" passHref>
                      <a><li className={'py-4 px-3 2xl:py-6'}>
                        <span>Reclutamiento</span>
                      </li></a>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className={'flex flex-col col-start-5 col-end-8 -skew-x-12 border-r border-gray-600 text-[13px]'}>
            <div className={'skew-x-12'}>
              <div className={'border-b border-gray-700 h-14 py-2'}>
                {session ?
                  <div className={'flex flex-row items-center justify-center align-middle space-x-4'}>
                    <div className={'h-10 w-10 relative border-2 border-purple-600 rounded-full'}>
                      <img
                        className={'object-contain rounded-full'}
                        src={session.user.avatar}
                        layout="fill"
                        alt="user avatar"
                        />
                    </div>
                    <p className={'text-gray-400 font-thin'}>{session.user.discord_tag} </p>
                    <div className={'cursor-pointer'} onClick={() => signOut({callbackUrl: process.env.NEXT_PUBLIC_HOME_URL})}>
                      <span className={'text-[#b621ff] uppercase font-semibold px-2'}>Salir</span>
                    </div>
                  </div>:
                  <div>
                    <a href={process.env.NEXT_PUBLIC_START_AUTHENTICATION_URL}>
                      <a><div className={'flex flex-row items-center justify-center align-middle space-x-4'}>
                        <div className={'h-10 w-10 relative border-2 border-gray-600 rounded-full'}>
                          <Image
                            className={'object-contain rounded-full'}
                            src="/user.svg"
                            layout="fill"
                            alt="Generic user icon"
                            />
                        </div>
                      <p className={'text-gray-400 font-thin'}>Ingresa como miembro <span className={'text-[#b621ff] uppercase font-semibold'}>Login</span></p> 
                      </div></a>
                    </a>
                  </div>
                }
              </div>
              <div>
                <ul className={'flex flex-row justify-between uppercase font-extrabold px-8 tracking-[.06em]'}>
                  <div className={'h-full w-full relative before:absolute before:bottom-0 before:right-0 before:left-0 before:skew-x-12 before:h-1 before:w-full hover:before:bg-[#b621ff] before:transition-all before:duration-800 cursor-pointer'} href="#">
                    <Link href="/guides">
                      <a><li className={'py-4 px-3 2xl:py-6'}>
                        <span>Guias</span>
                      </li></a>
                    </Link>
                  </div>
                  <div className={'h-full w-full relative before:absolute before:bottom-0 before:right-0 before:left-0 before:skew-x-12 before:h-1 before:w-full hover:before:bg-[#b621ff] before:transition-all before:duration-800 cursor-pointer'} href="#">
                    <Link href="/utilities">
                      <a><li className={'py-4 px-3 2xl:py-6'}>
                        <span>Utilidades</span>
                      </li></a>
                    </Link>
                  </div>
                  <div className={'h-full w-full relative before:absolute before:bottom-0 before:right-0 before:left-0 before:skew-x-12 before:h-1 before:w-full hover:before:bg-[#b621ff] before:transition-all before:duration-800 cursor-pointer'} href="#">
                    <Link href="/patch-notes">
                      <a><li className={'py-4 px-3 2xl:py-6'}>
                        <span>Patch Notes</span>
                      </li></a>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={'h-full w-auto flex-grow bg-[#17161a] px-4 md:px-16 lg:absolute lg:h-32 lg:top-0 lg:right-0 lg:left-0 lg:m-auto lg:pt-2 lg:pb-4 lg:w-[fit-content] 2xl:h-40'} style={{clipPath: 'polygon(0 0, 210% 0, 50% 100%, 0 70%)'}}>
          <Link href="/">
            <a className={'lg:w-auto lg:h-full lg:inline-block'}>
              <img className={'h-full w-auto object-center m-auto'} src={'/logo-clear.png'} alt='lokthar logo' />
            </a>
          </Link>
        </div>
        <div className={'text-gray-100 absolute right-8 md:right-16 lg:hidden'} onClick={props.toggleMenu}>
          <div className={'h-8 w-8'}>
            <div className={`menu-icon ${props.isToggled ? 'is-active' : ''}`}>
              <span className={'w-full h-[5px] bg-gray-100 block m-[5px] transition-all ease-in-out duration-[.2s] line'}></span>
              <span className={'w-full h-[5px] bg-gray-100 block m-[5px] transition-all ease-in-out duration-[.2s] line'}></span>
              <span className={'w-full h-[5px] bg-gray-100 block m-[5px] transition-all ease-in-out duration-[.2s] line'}></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`px-8 md:px-16 h-full w-full bg-[#17161a] overflow-hidden transition-all duration-[.6s] lg:hidden ${props.isToggled ? 'max-h-[100vh]' : 'max-h-0'}`}>
        <div className={'divide-y divide-gray-700 border-b border-gray-700 uppercase font-bold text-gray-100'}>
          <Link href="/">
            <a className={'w-full h-full inline-block'}>
              <div className={'py-4 md:py-8 flex justify-between'}>
                <span>Home</span>
                <div className={'relative h-6 w-6'}>
                  <Image
                    src={'/arrow-right-menu.svg'}
                    layout="fill"
                    alt="arrow navigation icon"
                  />
                </div>
              </div>
            </a>
          </Link>
          <Link href="/about-us">
            <a className={'w-full h-full inline-block'}>
              <div className={'py-4 md:py-8 flex justify-between'}>
                <span>Conocenos</span>
                <div className={'relative h-6 w-6'}>
                  <Image
                    src={'/arrow-right-menu.svg'}
                    layout="fill"
                    alt="arrow navigation icon"
                  />
                </div>
              </div>
            </a>
          </Link>
          <Link href="/utilities">
            <a className={'w-full h-full inline-block'}>
              <div className={'py-4 md:py-8 flex justify-between'}>
                <span>Utilidades</span>
                <div className={'relative h-6 w-6'}>
                  <Image
                    src={'/arrow-right-menu.svg'}
                    layout="fill"
                    alt="arrow navigation icon"
                  />
                </div> 
              </div>
            </a>
          </Link>
          <Link href="/guides">
            <a className={'w-full h-full inline-block'}>
              <div className={'py-4 md:py-8 flex justify-between'}>
                <span>Guias</span>
                <div className={'relative h-6 w-6'}>
                  <Image
                    src={'/arrow-right-menu.svg'}
                    layout="fill"
                    alt="arrow navigation icon"
                  />
                </div>
              </div>
            </a>
          </Link>
          <Link href="/patch-notes">
            <a className={'w-full h-full inline-block'}>
              <div className={'py-4 md:py-8 flex justify-between'}>
                <span>Patch Notes</span>
                <div className={'relative h-6 w-6'}>
                  <Image
                    src={'/arrow-right-menu.svg'}
                    layout="fill"
                    alt="arrow navigation icon"
                  />
                </div>
              </div>
            </a>
          </Link>
          <Link href="/gallery">
            <a className={'w-full h-full inline-block'}>
              <div className={'py-4 md:py-8 flex justify-between'}>
                <span>Galeria</span>
                <div className={'relative h-6 w-6'}>
                  <Image
                    src={'/arrow-right-menu.svg'}
                    layout="fill"
                    alt="arrow navigation icon"
                  />
                </div>
              </div>
            </a>
          </Link>
          <Link href="/recruitment">
            <a className={'w-full h-full inline-block'}>
              <div className={'py-4 md:py-8 flex justify-between'}>
                <span>Reclutamiento</span>
                <div className={'relative h-6 w-6'}>
                  <Image
                    src={'/arrow-right-menu.svg'}
                    layout="fill"
                    alt="arrow navigation icon"
                  />
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className={'flex flex-row justify-between border-t border-gray-700'}>
          <a className={'flex items-center justify-center w-full py-4'} href="https://discord.gg/uKMzYnbrnX">
            <div className={'flex justify-center text-gray-200 '}>
              <div className={'relative h-10 w-10'}>
                <Image
                  src="/discord.svg"
                  layout="fill"
                  alt="discord icon"
                />
              </div>
            </div>
          </a>
          <a className={'flex items-center justify-center w-full py-4'} href="http://www.twitch.tv/team/lokthar">
            <div className={'flex justify-center text-gray-200'}>
              <div className={'relative h-8 w-8'}>
                  <Image
                    src="/twitch.svg"
                    layout="fill"
                    alt="twitch icon"
                  />
                </div>
            </div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .menu-option {
          display: none;
          left: 0;
          position: absolute;
          text-align: left;
        }

        .hoverable:hover .menu-option {
          display: block;
        }

        .menu-icon.is-active{
          -webkit-transition: all 0.2s ease-in-out;
          -o-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
          -webkit-transition-delay: 0.6s;
          -o-transition-delay: 0.6s;
          transition-delay: 0.6s;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        
        .menu-icon.is-active .line:nth-child(2){
          width: 0px;
        }
        
        .menu-icon.is-active .line:nth-child(1),
        .menu-icon.is-active .line:nth-child(3){
          -webkit-transition-delay: 0.3s;
          -o-transition-delay: 0.3s;
          transition-delay: 0.3s;
          margin: 8px auto;
        }
        
        .menu-icon.is-active .line:nth-child(1){
          -webkit-transform: translateY(13px);
          -ms-transform: translateY(13px);
          -o-transform: translateY(13px);
          transform: translateY(13px);
        }
        
        .menu-icon.is-active .line:nth-child(3){
          -webkit-transform: translateY(-15px) rotate(90deg);
          -ms-transform: translateY(-13px) rotate(90deg);
          -o-transform: translateY(-13px) rotate(90deg);
          transform: translateY(-13px) rotate(90deg);
        }
        
      `}</style>
    </div>
  )
}
