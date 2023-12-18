import Start from "./Start/Start"
import TypesOfJob from "./TypesOfJob/TypesOfJob"
import Projects from "./Projects/Projects"
import s from './Content.module.scss'

const Content = () => {
  return (
    <main className={s.content}>
      <Start></Start>
      <TypesOfJob></TypesOfJob>
      <Projects></Projects>
    </main>
  )
}

export default Content