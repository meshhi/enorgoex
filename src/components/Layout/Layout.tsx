import Content from '../Content/Content'
import Header from './Header/Header'
import s from './Layout.module.scss'
const Layout = () => {
  return (
    <div className={s.layout}>
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default Layout