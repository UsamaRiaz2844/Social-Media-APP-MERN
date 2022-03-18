import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./Feed.css"
import axios from "axios";


// import {Posts} from "../../dummydata"


function Feed() {
  const [posts, setPosts] = useState([]); 

  useEffect(()=>{
    
     const fetchPost = async ()=>{
       
        const res = await axios.get("post/timeline/62221ed0f01f6e55e2df26d4") ;
        // const res = await axios.get("post/profile/ALI2") ;
       

        setPosts(res.data)
     }; 
    fetchPost()
  },[posts])
  return (
    <div className="feed">
      <Share/>
      {posts.map((p)=>{
      
          return   <Post key={p._id} post={p} />
      })}
      
     
      
    </div>
  )
}

export default Feed
