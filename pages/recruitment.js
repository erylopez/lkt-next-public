import { useState } from 'react';
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/button'
import RecruitmentSuccess from '../components/recruitment_success'
import { getSession, useSession } from "next-auth/client"
import axios from 'axios';

export default function Recruitment(props) {
  const [ session, loading ]      = useSession();
  const [userNick, setUserNick]   = useState(null);
  const [discord, setDiscord]     = useState(props.discord_tag);
  const [hrsPerDay, setHrsPerDay] = useState({low:false, regular: false, high: false});
  const [hrRange, setHrRange]     = useState({morning: false, day: false, night: false});
  const [role, setRole]           = useState({dps:false, tank: false, healer: false});
  const [playstyle, setPlaystyle] = useState({tryhard: false, efective: false, casual: false});
  const [referral, setReferral]   = useState(null);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [formSuccess, setForSuccess]        = useState(false);

  function clickHrsPerDay(option) {
    setHrsPerDay({low: option == 'low', regular: option == 'regular', high: option == 'high'})
  }

  function clickHrRange(option) {
    let newMorningValue = hrRange['morning'];
    let newNightValue = hrRange['night'];
    let newDayValue = hrRange['day'];
    if (option == 'morning') {
      newMorningValue = !hrRange['morning'];
    } else if (option == 'day') {
      newDayValue = !hrRange['day'];
    } else if (option == 'night') {
      newNightValue = !hrRange['night'];
    }

    setHrRange({morning: newMorningValue, day: newDayValue, night: newNightValue})
  }

  function clickRole(option) {
    setRole({dps: option == 'DPS', tank: option == 'Tank', healer: option == 'Healer'});
  }

  function clickPlaystyle(option) {
    setPlaystyle({tryhard: option == 'Tryhard', efective: option == 'Efective', casual: option == 'Casual'})
  }

  function changeNick(event) {
    setUserNick(event.target.value);
  }

  function changeDiscord(event) {
    setDiscord(event.target.value);
  }

  function changeReferral(event) {
    setReferral(event.target.value);
  }

  function handleSubmit(event) {
    const accessToken = session?.accessToken;
    const finalSubmit = {
      userNick,
      discord,
      hrsPerDay,
      hrRange,
      role,
      playstyle,
      referral,
      accessToken
    }

    fetch(process.env.NEXT_PUBLIC_CHECK_RECRUITMENT_URL, {method: 'POST', headers: {
      'Content-Type': 'application/json'
    },body: JSON.stringify(finalSubmit)})
  }

  return (
    <Layout>
      {
        props.already_sent ? <RecruitmentSuccess /> :
        <div className={'min-h-[92vh] w-full pt-28 pb-2 xl:px-16 2xl:px-32 text-center bg-gray-800 bg-cover bg-center bg-no-repeat'} style={{backgroundImage: 'url(/backgrounds/texture-bottom.jpg)'}}>
          <div className={'h-full w-full py-6 px-6 md:px-16 xl:px-48 2xl:px-80 2xl:py-16 '} >
            <div className={'p-6 w-full h-full xl:px-20 2xl:px-44'} style={{ background: 'rgb(204, 204, 204)', background: 'rgba(23, 22, 26, 0.6)'}}>
              <div className={'pb-12 xl:py-12 '}>
                <h2 className={'uppercase text-lg font-bold xl:text-2xl 2xl:text-3xl text-gray-300'} style={{fontFamily: 'IM Fell DW Pica'}} >Reclutamiento Guild PvE & PvP - New world </h2>
              </div>
              <div className={'flex flex-col space-y-12'}>
                <div className={'flex flex-col space-y-16  items-center justify-center align-middle'}>
                  <div className={'w-full flex flex-col space-y-4 justify-center items-center xl:flex-row xl:space-x-12 xl:space-y-0'}>
                    <span className={'text-gray-300 text-sm font-bold  w-full xl:w-1/5'}>
                      Nick
                    </span>
                    <div className={'flex flex-grow items-center border-b border-teal-500 py-2 w-full'}>
                      <input className={'appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 focus:outline-none'}
                             type="text" placeholder="PeepoHappy"
                             onChange={changeNick} />
                    </div>
                  </div>
                  <div className={'w-full flex flex-col space-y-4 justify-center items-center xl:flex-row xl:space-x-12 xl:space-y-0'}>
                    <span className={'block text-gray-300 text-sm font-bold w-full xl:w-1/5'}>
                      Discord
                    </span>
                    <div className={'flex flex-grow items-center border-b border-teal-500 py-2 w-full'}>
                      <input className={'appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 focus:outline-none'}
                             type="text" placeholder="PeepoHappy#1234" value={discord}
                             onChange={changeDiscord}/>
                    </div>
                  </div>
                  <div className={'w-full flex flex-col space-y-4 justify-center items-center xl:flex-row xl:space-x-12 xl:space-y-0'}>
                    <span className={'block text-gray-300 text-sm font-bold w-full xl:w-1/5 '}>Hs al dia</span>
                    <div className={'w-full flex flex-grow space-x-2 justify-between'}>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${hrsPerDay.low ? "bg-red-800" : "bg-gray-600"}`}
                            onClick={() => clickHrsPerDay('low')}>
                        <span>{'< 4hs'}</span>
                      </span>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${hrsPerDay.regular ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickHrsPerDay('regular')}>
                        <span> 4-6hs</span>
                      </span>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${hrsPerDay.high ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickHrsPerDay('high')}>
                        <span>+ 6hs</span>
                      </span>
                    </div>
                  </div>
                  <div className={'w-full flex flex-col space-y-4 justify-center items-center xl:flex-row xl:space-x-12 xl:space-y-0'}>
                    <span className={'block text-gray-300 text-sm font-bold w-full xl:w-1/5 '}>Rango Hs</span>
                    <div className={'w-full flex flex-grow justify-between space-x-2'}>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${hrRange.morning ? "bg-red-800" : "bg-gray-600"}`}
                            onClick={() => clickHrRange('morning')}>
                        <span>Manana</span>
                      </span>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${hrRange.day ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickHrRange('day')}>
                        <span>Tarde</span>
                      </span>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${hrRange.night ? 'bg-red-800': 'bg-gray-600'}`}
                            onClick={() => clickHrRange('night')}>
                        <span>Noche</span>
                      </span>
                    </div>
                  </div>
                  <div className={'w-full flex flex-col space-y-4 justify-center items-center xl:flex-row xl:space-x-12 xl:space-y-0'}>
                    <span className={'block text-gray-300 text-sm font-bold w-full xl:w-1/5 '}>Rol</span>
                    <div className={'w-full flex flex-grow justify-between space-x-2'}>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer btn-active ${role.dps ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickRole('DPS')}>
                        <span>DPS</span>
                      </span>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${role.tank ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickRole('Tank')}>
                        <span>Tank</span>
                      </span>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${role.healer ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickRole('Healer')}>
                        <span>Healer</span>
                      </span>
                    </div>
                  </div>
                  <div className={'w-full flex flex-col space-y-4 justify-center items-center xl:flex-row xl:space-x-12 xl:space-y-0'}>
                    <span className={'block text-gray-300 text-sm font-bold w-full xl:w-1/5 '}>Enfoque</span>
                    <div className={'w-full flex flex-grow justify-between space-x-2'}>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer btn-basic ${playstyle.tryhard ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickPlaystyle('Tryhard') }>
                        <span>Tryhard</span>
                      </span>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer ${playstyle.efective ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickPlaystyle('Efective') }>
                        <span>Efectivo</span>
                      </span>
                      <span className={`w-32 xl:w- py-2 rounded-md text-sm font-bold text-gray-300 cursor-pointer btn-active ${playstyle.casual ? 'bg-red-800' : 'bg-gray-600'}`}
                            onClick={() => clickPlaystyle('Casual') }>
                        <span>Casual</span>
                      </span>
                    </div>
                  </div>
                  <div className={'w-full flex flex-col space-y-4 justify-center items-center xl:flex-row xl:space-x-12 xl:space-y-0'}>
                    <span className={'block text-gray-300 text-sm font-bold w-full xl:w-1/5'}>
                      Referido
                    </span>
                    <div className={'flex flex-grow items-center border-b border-teal-500 py-2 w-full'}>
                      <input className={'appearance-none bg-transparent border-none w-full text-gray-300 py-1 px-2 focus:outline-none'}
                             type="text" placeholder="Ej: PeepoSad"
                             onChange={changeReferral}/>
                    </div>
                  </div>
                </div>
                <Button text="Submit" url="#" color="bg-[#870823]" border="border-[#870823]" handleClick={handleSubmit}/>
              </div>
            </div>
          </div>
        </div>
      }
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session?.accessToken) {
    return {
      redirect: {
        destination: `${process.env.NEXT_PUBLIC_START_AUTHENTICATION_URL}?return_to=recruitment`,
        permanent: false,
      },
    }
  }

  const already_sent = await axios.get(`${process.env.NEXT_PUBLIC_CHECK_RECRUITMENT_URL}?access_token=${session?.accessToken}`);

  console.log(already_sent.data)

  return {
    props: {already_sent: already_sent?.data?.already_sent, discord_tag: session.user.discord_tag},
  }
}

