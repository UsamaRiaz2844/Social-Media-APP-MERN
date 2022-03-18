import { EmojiEmotions, Label, PartyMode, PermMedia, Room } from "@material-ui/icons";
import "./Share.css";

function Share() {
  return (
    <div>
      <div className="shareWrapper">

          <div className="shareTop">
              <img src="/assets/usama.jpg" alt="Profile Pic" className="shareImg" />
              <input placeholder="What's In Your Mind ? " className="shareInput" />
          </div>
    <hr className="shareLine" />
          <div className="shareBottom">
              <div className="shareOptions">
                  <div className="shareOption">

                      <PermMedia htmlColor="tomato" className="shareIcon" />
                      <li className="shareText">Photo/Video</li>
                     
                      <Label  htmlColor="blue" className="shareIcon" />
                      <li className="shareText">Tag</li>
                      
                      <Room htmlColor="green" className="shareIcon" />
                      <li className="shareText">Location</li>
                      
                      <EmojiEmotions htmlColor="rgb(131, 100, 0)" className="shareIcon" />
                      <li className="shareText">Feelings</li>

                    <button className="shareButton">Share</button>
                    </div>


                  </div>


              </div>
              </div>
              </div>

    
    
    
  );
}

export default Share;
