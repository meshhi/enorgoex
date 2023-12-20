import Start from "./Start/Start"
import TypesOfJob from "./TypesOfJob/TypesOfJob"
import Projects from "./Projects/Projects"
import Reviews from "./Reviews/Reviews"
import Footer from "./Footer/Footer"
import Geography from "./Geography/Geography"
import s from './Content.module.scss'

const Content = () => {
  return (
    <main className={s.content}>
      <Start></Start>
      <TypesOfJob></TypesOfJob>
      <Projects></Projects>
      <Reviews></Reviews>
      <Geography></Geography>
      <Footer></Footer>
    </main>
  )
}

export default Content