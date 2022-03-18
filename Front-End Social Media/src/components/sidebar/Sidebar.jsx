import {
  Bookmark,
  Chat,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  Event,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import AllFriends from "../Allfriends/AllFriends";
import "./Sidebar.css";
import {Users} from '../../dummydata'

function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledOutlined className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarListItemIcon" />
            <span className="sideBarListItemText">BookMarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sideBarButton">Show More</button>
        <hr className="hrline"></hr>

        {
        Users.map((u)=>{
          return   <AllFriends key={u.id} user={u} />
        })
      }

      
      </div>
    </div>
  );
}

export default Sidebar;
