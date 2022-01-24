import Link from 'next/link'

export default function Button(props) {
  return (
    <div className={'uppercase text-sm font-bold text-gray-100 tracking-[.06em] 2xl:bottom-20'} onClick={props.handleClick}>
      <div className={'flex flex-col justify-center items-center'}>
        <Link href={props.url}>
          <a className={`${props.border} relative border-2 ] px-8 py-3 animation-btn overflow-hidden`}>
            <span className={'z-10 relative'}>{props.text}</span>
            <div className={`${props.color} ${props.btnSize} absolute z-[1px] rotate-45 transform translate-x-32  transition-all duration-[.4s] ease-linear btn-animated`}></div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .btn-sm{
          width: 125%;
          height: 500%;
          right: 16rem;
        }
        .btn-md, .btn-xl{
          width: 115%;
          height: 800%;
          right: 26rem;
        }
        .animation-btn:hover{
          box-shadow: 0 3px 10px rgb(103 10 46);
        }
        .animation-btn:hover >  .btn-sm{
          --tw-translate-x: 18rem;
          --tw-translate-y: -8rem;
        }
        .animation-btn:hover >  .btn-md{
          --tw-translate-x: 26rem;
          --tw-translate-y: -10rem;
        }
        .animation-btn:hover > .btn-xl{
          --tw-translate-x: 30rem;
          --tw-translate-y: -10rem;
        }
      `}</style>
    </div>
  )
}
