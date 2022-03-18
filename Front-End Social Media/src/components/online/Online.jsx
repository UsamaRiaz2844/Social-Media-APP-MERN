import React from 'react'

function Online({user}) {
  return (
   
        <div className="onlineFriendList">
            <img
              src={user.profilePicture}
              alt="Friends Picture"
              className="onlineFriendImg"
            />
            <span className="onlineStatusBar"></span>
            <span className="onlineFriendName">{user.username}</span>
          </div>
    
  )
}

export default Online
