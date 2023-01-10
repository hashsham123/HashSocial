import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons"
export default function Share() {
  return (
    <div className="share">Heyy its here
    <div className="shareWrpper">
    <div className="shareTop">
        <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
        <input placeholder="what's in your mind" className="shareInput"/>
    </div>
    <hr className="shareHr"/>
    <div className="shareBottom">
        <div className="shareOptions">
        <div className="shareOption">
            <PermMedia htmlColor="tomato "className="shareIcon"/>
            <span className="shareOptionText">Photo or Video</span>
        </div>
        <div className="shareOption">
            <Label htmlColor="blue " className="shareIcon"/>
            <span className="shareOptionText">Tag</span>
        </div>
        <div className="shareOption">
            <Room  htmlColor="green "className="shareIcon"/>
            <span className="shareOptionText">Location</span>
        </div>
        <div className="shareOption">
            <EmojiEmotions htmlColor="yellow" className="shareIcon"/>
            <span className="shareOptionText">Feelings</span>
        </div>
        <button className="shareButton">Share</button>

        </div>
    </div>
    </div>
    </div>

  )
}
