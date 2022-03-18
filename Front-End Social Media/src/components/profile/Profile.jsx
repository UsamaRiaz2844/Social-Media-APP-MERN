import "./profile.css";
import { useEffect, useState } from "react"
import Post from "../post/Post"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from "../topbar/Topbar";
import axios from "axios";
import Share from "../share/Share"


function Profile() {
  
  const [posts, setPosts] = useState([]); 
  
  useEffect(()=>{
  
  const fetchPost = async ()=>{
  
  // const res = await axios.get("post/timeline/62221ed0f01f6e55e2df26d4") ;
  const res = await axios.get("post/profile/ALI2") ;
  
  
  setPosts(res.data)
  }; 
  fetchPost()
  },[])

  return (
    <div>
        <Topbar/>
      <div className="home">
        <div className="homeLeft">
          <Sidebar />
        </div>
        <div className="homeRight">
          <div className="homeRightTop">
            <div className="homeRightTopCover">
              <img src="/assets/cover.jpg" alt="ProfileCover Picture" className="ProfilecoverPictre" />

              <div className="homeprofilepicture">
                
              <img src="/assets/usama.jpg"  alt="Profile Cover Picture" className="HomeProfilePictre" />
                </div>
              </div>


              <div className="toprightinfo">
                <h2 className="topRightInfoName">
                  Usama Riaz
                  </h2>
                  <span className="toprightinfodesc">
                    Welcome To My Profile
                    </span>
                </div>
            </div>
          <div className="homeRightBottom">
           
           




  <div className="feed">
    <Share/>
    {posts.map((p)=>{
    
        return   <Post key={p._id} post={p} />
    })}
    
   
    
  </div>






























            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
