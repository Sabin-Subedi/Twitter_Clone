import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetmessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayname: "Sabin Subedi",
      username: "@sabin8787",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1263828234254180352/ZqmfuB_O_200x200.jpg",
    });

    setTweetImage("");
    setTweetmessage("");
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://pbs.twimg.com/profile_images/1263828234254180352/ZqmfuB_O_200x200.jpg' />
          <input
            type='text'
            placeholder="What's happening"
            value={tweetMessage}
            onChange={(e) => setTweetmessage(e.target.value)}
          />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional:Enter image URL'
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button onClick={sendTweet} type='submit' className='tweetBox_button'>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
