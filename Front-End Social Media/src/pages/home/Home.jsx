
import Feed from '../../components/feed/Feed'

import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Home.css"

function Home() {
  return (
    <>
    <Topbar />
    <div className='home'>
     <Sidebar/>
     <Feed/>
     <Rightbar/>
    </div>
    </>
  )
}

export default Home
