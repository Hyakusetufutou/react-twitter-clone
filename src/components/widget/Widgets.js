import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーサード検索" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId={"1750836515847151641"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SAIONJI_com"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"http://twitter.com/Shin_Engineer"}
          options={{ text: "#React.js勉強中", via: "Shin_Engineer" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
