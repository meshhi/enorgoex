import Start from "./Start/Start"
import TypesOfJob from "./TypesOfJob/TypesOfJob"
import Projects from "./Projects/Projects"
import Reviews from "./Reviews/Reviews"
import s from './Content.module.scss'

const Content = () => {
  return (
    <main className={s.content}>
      <Start></Start>
      <TypesOfJob></TypesOfJob>
      <Projects></Projects>
      <Reviews></Reviews>
    </main>
  )
}

export default Content