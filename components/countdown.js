import React from 'react';
import Countdown from 'react-countdown';

const renderer= ({days, hours, minutes, seconds})=>{
  return (
    <div className={'flex-col'}>
      <div className={'flex flex-row text-gray-300 text-xl space-x-8'}>
        <div className={'flex-row items-center align-middle justify-center'}>
          <div className={'flex space-x-1 items-center align-middle justify-center h-10 w-10 rounded-md'}>
            <span className={'text-red-700 font-bold text-3xl'}>{days}</span>
            <span className={'text-sm'}>D</span>
          </div>
        </div>
        <div className={'flex-row items-center align-middle justify-center'}>
          <div className={'flex space-x-1 items-center align-middle justify-center h-10 w-10 rounded-md'}>
            <span className={'text-red-700 font-bold text-3xl'}>{hours}</span>
            <span className={'text-sm'}>H</span>
          </div>
        </div>
        <div className={'flex-row items-center align-middle justify-center'}>
          <div className={'flex space-x-1 items-center align-middle justify-center h-10 w-10 rounded-md'}>
            <span className={'text-red-700 font-bold text-3xl'}>{minutes}</span>
            <span className={'text-sm'}>M</span>
          </div>
        </div>
        <div className={'flex-row items-center align-middle justify-center'}>
          <div className={'flex space-x-1 items-center align-middle justify-center h-10 w-10 rounded-md'}>
            <span className={'text-red-700 font-bold text-3xl'}>{seconds}</span>
            <span className={'text-sm'}>S</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Header(props){
  return(
    <Countdown date={'2021-09-28T08:00:00'} renderer={renderer} />
  )
}