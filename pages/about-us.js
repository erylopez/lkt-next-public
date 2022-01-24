import Image from 'next/image'
import Layout from '../components/layout'
import SectionBuilding from '../components/section-building'

export default function AboutUs() {
  return (
    <Layout>
      <div className={'h-full w-full bg-[#17161a]  tracking-wider subpixel-antialiased'} >
        <div className={'w-full h-full relative pt-6'} >
          <div className={'px-6  h-full w-full bg-cover relative bg-right xl:bg-top text-center text-white md:px-16 lg:px-36 pt-44 lg:pt-24 2xl:pt-36'} style={{ backgroundImage:'linear-gradient(#87082394, #17161a), url(/backgrounds/about-us.png)'}}>
            <div className={'flex flex-col py-4 space-y-12 subpixel-antialiased md:py-12 xl:px-32 2xl:px-80 xl:py-12 2xl:py-20'}>
              <div>
                <h1 className={'uppercase pb-12 text-2xl font-bold md:text-4xl xl:text-4xl'} style={{textShadow: '1px 1px 2px #17161a'}} >Sobre Nosotros</h1>
                <h3 className={'font-light text-gray-200 text-lg xl:text-normal xl:font-light'}>
                  Los primeros miembros de nuestra comunidad han estado jugando juntos desde fines de 2012 en el MMO Tera,
                  sin embargo no fue hasta principios de 2017 que comenzamos a reclutar oficialmente para el proyecto de comunidad que hoy en dia es Lokthar. <br />
                  Cuando Black Desert anuncio fecha para la beta de los servidores en Suramérica ya habiamos formado una comunidad llamada ZonaBDO,
                  de la cual derivo nuestra primera guild ValarMorghulis, la cual mas adelante renombrariamos como Lokthar. <br /><br />
                  En Black Desert estuvimos activos hasta mediados 2019, logrando mantenernos dentro del top 4 de gremios que mas ganaron conquistas en los ultimos dos años de actividad de Lokthar (datos de las infografias de Pearl Abyss/Redfox)
                  <br /><br />
                  Tras dejar atras black desert, nos mantuvimos como comunidad en Discord, jugando variedad de juegos, a la espera del proximo MMO para reunir a todos nuestros camaradas.
                  <br /><br />
                  En 2021 decidimos traer nuevamente la organizacion de la guild tras el lanzamiento de New World!
                </h3>
              </div>
              <div className={'flex justify-between bg-[#17161a] xl:p-2 md:space-x-4 '}>
                <div className={'relative flex-grow h-44 w-full 2xl:h-64'}>
                  <Image
                    className={'object-cover'}
                    src="/lokthar-valencia.png"
                    layout="fill"
                    alt="About us background"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={'flex flex-grow h-full w-full bg-gray-300 py-12 px-6'} style={{boxShadow: '0 5px 15px 0 #000000'}}>
            <div className={'h-full w-full flex flex-grow md:px-16 xl:px-28 2xl:px-80 '}>
              <div className={'grid grid-cols-3 '}>
                <div className={'col-span-1'}>
                  <div className={'flex flex-col h-full w-full items-center align-middle  space-y-6 justify-between'}>
                    <div className={'h-full w-full p-2'}>
                      <div className={'relative h-full w-full'}>
                        <Image
                          className={'object-contain object-center'}
                          src="/appmockup.png"
                          layout="fill"
                          alt="mockup lokthar app"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={'col-span-2 h-full pl-12 text-gray-800'}>
                  <div className={'flex flex-col space-y-12'}>
                    <div className={'flex flex-col space-y-4'}>
                      <div className={'uppercase font-bold text-2xl'}>
                        <h3 className={''}>Nuestra <span className={'text-[#870823]'}>Organizacion</span></h3>
                      </div>
                      <div className={'text-normal'}>
                        <p>
                          Una de las caracteristicas constantes de Lokthar en todos los juegos donde participamos en nuestra organizacion. <br/>
                          Siempre estamos buscando la forma mas efectiva de organizar nuestras actividades, muchas veces creando herramientas
                          como bots de discord, bots de twitch, apps para complementar sistemas in-game y nuestras apps para organizar a nuestros miembros y aliados
                          en las actividades de la comunidad.
                        </p>
                      </div>
                    </div>
                    <div className={'flex flex-col space-y-4'}>
                      <div>
                        <h4 className={'font-bold text-lg text-[#870823]'}>
                          +4 años de experiencia en juego organizado y competitivo
                        </h4>
                      </div>
                      <div>
                        <p>
                          Buscamos con nuestra organizacion promover el juego competitivo a todos nuestros miembros.<br />
                          Contamos con varios developers en nuestras filas, y siempre estamos buscando nuevas formas de hacer
                          mas divertidas las actividades grupales e individuales de nuestra guild.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
