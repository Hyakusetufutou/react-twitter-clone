import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="post--avatar">
        <Avatar />
      </div>
      <div className="post--body">
        <div className="post--header">
          <div className="post--headerText">
            <h1>プログラミングチュートリアル</h1>
            <span className="post--headerSpecial">
              <VerifiedUser className="post-budge" />
              user_name
            </span>
          </div>
          <div className="post--headerDescription">
            <p>Reactなう</p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random" />
        <div className="post--footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
