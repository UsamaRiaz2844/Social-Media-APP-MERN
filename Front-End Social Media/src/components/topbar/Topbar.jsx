import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./Topbar.css";
import {  Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">GoSocial</span>
        </Link>
      </div>


      <div className="topBarCenter">
        <div className="searchBar">
               <Search  className="searchIcon"/>
          <input
            placeholder="Search For Friends, Post, or Video"
            className="searchInput"
          />
        </div>
       </div>


        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarLink">HomePage</span>
            <span className="topBarLink">Timeline</span>
          </div>
          <div className="topBarIcons">
            <div className="topBarIconItem">
              <Person />
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <Chat />
              <span className="topBarIconBadge">2</span>
            </div>
            <div className="topBarIconItem">
              <Notifications />
              <span className="topBarIconBadge">1</span>
            </div>
          
        </div>
      </div>
      <img src="/assets/usama.jpg" alt="Profile Picture" className="topbarimg" />
    </div>
  );
}
