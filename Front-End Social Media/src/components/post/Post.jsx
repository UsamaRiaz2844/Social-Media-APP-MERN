import {MoreVert} from "@material-ui/icons";
import "./Post.css";
// import Posts from "../../dummydata"
// import {Users} from "../../dummydata"
import { useState, useEffect } from "react";
import axios from "axios";
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';

function Post({post}) {
  const [like , setLike] = useState(post.likes.length);
  const [isliked , setIsliked] = useState(false);
  const [user , setUser] = useState({});


  const likehandler = ()=>{
    setLike(isliked ? like-1 : like+1)
    setIsliked(!isliked)

  }


  useEffect(()=>{
    
    const fetchUser = async ()=>{
       const res = await axios.get(`user/${post.userId}`)
       setUser(res.data)
    }; 
   fetchUser()
 },[post.userId])
 
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">

            <Link to={`/profile/${user.userName}`} style={{textDecoration:"none"}}> 
            <img
              src={user.profilePicture ? user.profilePicture : 'assets/noprofile.webp'}
              alt="ProfilePic"
              className="postProfilePic"
            />
            </Link>
            <Link to={`/profile/${user.userName}`} style={{textDecoration:"none" , color:"black"}}> 

            <span className="PostTopName">{user.userName} </span>
            </Link>
            <span className="date">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postTopIcon" />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          
        {post.image ?  <img src={post.image } alt="postPicture" className="postImg" />   : ``}
          
         
        </div>

        <div className="postBottom">
          <div className="postBottonLeft">
            <div className="likeIcons">
              <img src="/assets/like.png"  onClick={likehandler} className="likeicon" alt="Like Image" />
              
            </div>
          
            <span className="postBottomText">{like} People Like This</span>
          </div>
          <div className="postBottonRight">
            <span className="postComment">{post.comments} People Commented</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
