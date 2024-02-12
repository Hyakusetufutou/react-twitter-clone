import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Timeline = () => {
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="プログラミングチュートリアル"
        userName="Shin_Engineer"
        verified={true}
        text="初めてのツイート"
        avatar="https://www.nishitetsutravel.jp/img/train/36plus3_visual.jpg"
        image="http://source.unsplash.com/random"
      />
    </div>
  );
};

export default Timeline;
