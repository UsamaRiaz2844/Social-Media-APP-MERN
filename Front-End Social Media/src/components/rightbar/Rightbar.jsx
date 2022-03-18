import { CakeOutlined } from "@material-ui/icons";
import Online from "../online/Online";
import "./Rightbar.css";
import {Users} from '../../dummydata'

function Rightbar( {profile} ) {
  const HomeRightBar = ()=>{
      return(
    
        <>
      <div className="rightBarWrapper">
    <div className="rightBarBirthday">
      <CakeOutlined color="secondary" className="material-icons" />
      <span className="birthdayText">
        <b> Usama </b>, and <b> 3 Others </b> 3 Others Have Borthday Today
      </span>
    </div>

    <div className="rightbarAds">
      <img src="/assets/ads.jpg" alt="" className="adimage" />
    </div>

    <div className="rightBarOnlineFriends">
      <span className="RightBarOnlineFriendsText">Online Friends</span>
  {
    Users.map((u)=>{
      return   <Online key={u.id} user={u} />
    })
  }
   </div>
  </div>
  </>

  )
  }

  const ProfileRightBar = ()=>{
    return(
<>
      <h2 className="rightBarInfoTitle"> User Information</h2>
      <div className="rightBarInfo">
        <div className="rightbarinfoItem">
          <h3>City: </h3>
          <span className="rightBarinfoans">Faisalabad</span>
          </div>
        <div className="rightbarinfoItem">
          <h3>Country: </h3>
          <span className="rightBarinfoans">Pakistan</span>
          </div>
        
        <div className="rightbarinfoItem">
          <h3>Relationship Status: </h3>
          <span className="rightBarinfoans">Single</span>
          </div>
        </div>

        <h2 className="allfriendsnametitle">All Friends</h2>
        <div className="rightbarallfriends">  
          <div className="rightbarfrndItem">
            <img src="/assets/talha.jpg" alt="friend picture" className="rightBarallfriendItem" />
            <span className="friendsname">Talha </span>
            </div>
          <div className="rightbarfrndItem">
            <img src="/assets/rizwan.jpg" alt="friend picture" className="rightBarallfriendItem" />
            <span className="friendsname">Rizwan </span>
            </div>
          <div className="rightbarfrndItem">
            <img src="/assets/faizan.jpg" alt="friend picture" className="rightBarallfriendItem" />
            <span className="friendsname">Faizan </span>
            </div>
          <div className="rightbarfrndItem">
            <img src="/assets/talha.jpg" alt="friend picture" className="rightBarallfriendItem" />
            <span className="friendsname">Talha </span>
            </div>
          <div className="rightbarfrndItem">
            <img src="/assets/talha.jpg" alt="friend picture" className="rightBarallfriendItem" />
            <span className="friendsname">Talha </span>
            </div>
          <div className="rightbarfrndItem">
            <img src="/assets/talha.jpg" alt="friend picture" className="rightBarallfriendItem" />
            <span className="friendsname">Talha </span>
            </div>
          
          </div>
</>
    )
  }

  return (
    <div className="rightBar">
      {profile ?  <ProfileRightBar/>  : <HomeRightBar/>    }
  
    </div>
  
  );
}

export default Rightbar;
