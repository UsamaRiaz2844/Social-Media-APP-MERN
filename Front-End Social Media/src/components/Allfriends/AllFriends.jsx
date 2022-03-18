import "./allfriend.css"

function AllFriends({user}) {
  return (
    <div>
      <ul className="sideBarFriendsList">
          <li className="sideBarFriend">
            <img
              src={user.profilePicture}
              alt="Friends Image"
              className="friendsImg"
            />
            <span className="friendsName">{user.username}</span>
          </li>
        </ul>
    </div>
  )
}

export default AllFriends
