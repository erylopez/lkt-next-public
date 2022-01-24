import Button from './button'
import Countdown from './countdown'

export default function HeroGameStatus() {
  return (
    <div className={'pt-20 px-6 bg-gradient-to-r from-[#17161a] via-[#27252a] to-[#17161a] justify-center text-center xl:pt-32 xl:py-6'}>
      <div className={'md:px-16 xl:px-28 2xl:px-80 py-20 text-gray-300 tracking-wider subpixel-antialiased space-y-8 bg-no-repeat bg-center '} style={{backgroundImage: 'url(/backgrounds/nw-section.png)'}}>
        <h2 className={'uppercase text-xl font-bold xl:text-2xl'} style={{fontFamily: 'IM Fell DW Pica'}} >Nueva Guild Lokthar en New World</h2>
        <div className={'flex flex-col space-y-8 items-center justify-center'}>
          <p className={'font-normal'}>
            Despues un año de espera tras finalizar nuestra era en Black Desert, volvemos a juntarnos en otro MMO!<br />
            Luego de jugar las alphas/betas de New World, decidimos traer nuestra organizacion para volver a juntar a nuestros camaradas en Aeternum!<br />
            La guild Lokthar se enfocará para quienes deseen jugar competitivamente (tryhard) con la organizacion que nos caracteriza, <br />
            Si estas interesado en unirte a nuestras filas, puedes iniciar tu reclutamiento desde aqui.
          </p>
        </div>
        <Button text="Iniciar Reclutamiento" url="/recruitment" color="bg-[#870823]" border="border-[#870823]" btnSize="btn-md"/>
      </div>
    </div>
  )
}
