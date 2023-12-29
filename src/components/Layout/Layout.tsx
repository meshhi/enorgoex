import Content from '../Content/Content'
import { RandomSlider } from '../Content/UIELements/RandomSlider'
import Header from './Header/Header'

const Layout = () => {
  return (
    <div>
      {/* <RandomSlider></RandomSlider> */}
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default Layout