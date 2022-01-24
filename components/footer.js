export default function Header(props){
  return(
    <footer className={'footer bg-gradient-to-r from-[#17161a] via-[#27252a] to-[#17161a] relative pt-1 border-b-2 border-[#b621ff]'} style={{boxShadow:'0 3px 10px black'}}>
      <div className={'container mx-auto px-6'}>
        <div className={'flex flex-col items-center'}>
          <div className={'sm:w-2/3 text-center py-6'}>
            <p className={'text-sm text-gray-300 font-bold mb-2'}>
                © 2021 by Lokthar - Black Desert Online & New World guild. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}