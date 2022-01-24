export default function RecruitmentSuccess(){
  return (
    <div className={'min-h-[92vh] w-full pt-28 pb-2 xl:px-16 2xl:px-32 text-center bg-red-800 bg-cover bg-center bg-no-repeat'} style={{backgroundImage: 'url(/backgrounds/texture-bottom.jpg)'}}>
      <div className={'h-full w-full py-6 px-6 md:px-16 xl:px-48 2xl:px-80 2xl:py-16 '} >
        <div className={'p-6 w-full h-full xl:px-20 2xl:px-44'} style={{ background: 'rgb(204, 204, 204)', background: 'rgba(23, 22, 26, 0.6)'}}>
          <div className={'pb-12 xl:py-12 '}>
            <h2 className={'uppercase text-lg font-bold xl:text-2xl 2xl:text-3xl text-gray-300'}
                style={{fontFamily: 'IM Fell DW Pica'}} >
              Tu solicitud fue recibida. Estaremos en contacto muy pronto!
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}