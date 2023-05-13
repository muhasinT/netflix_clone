import './home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import List from '../../Components/List/List'

import { fetchUrl } from '../../Request/requests'

function Home() {




  return (
    <div className="home">
      <Navbar />
      <Banner type="Movie" />
      <List url={fetchUrl.trending} title={'Trending'} />
      <List url={fetchUrl.action} title={'Action'} />
      <List url={fetchUrl.adventure} title={'Adventure'} />
      <List url={fetchUrl.animation} title={'Animation'} />
    </div>
  )
}

export default Home