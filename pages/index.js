import Image from 'next/image'
import Layout from '../components/layout'
import HeroAbout from '../components/hero_about'
import HeroGameStatus from '../components/hero_game_status'
import CreatorsStatus from '../components/creators_status'
import HeroTools from '../components/hero_tools'
import LatestNews from '../components/latest_news'
import HeroMerchandising from '../components/hero_merchandising'
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const router = useRouter()
  const { login_error } = router.query;

  if (login_error) {
    toast.error("Necesitas loguear para acceder a esa seccion", {toastId: 1})
  }

  return (
    <Layout>
      <HeroAbout/>
      <ToastContainer />
      <HeroGameStatus/>
      <CreatorsStatus />
      <HeroMerchandising />
    </Layout>
  )
}
