import React from "react";
import XIcon from "@mui/icons-material/X";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* ツイッターアイコン */}
      <XIcon className="sidebar--twitterIcon" />

      {/* SidebarOption */}
      <SidebarOption text="ホーム" Icon={HomeIcon} />
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOption text="ブックマーク" Icon={TurnedInNotIcon} />
      <SidebarOption text="リスト" Icon={ListAltOutlinedIcon} />
      <SidebarOption text="プロフィール" Icon={PersonOutlinedIcon} />
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />
      {/* SidebarOption */}

      {/* ツイートボタン */}
      <Button variant="outlined" className="sidebar--tweet">
        ツイートする
      </Button>
    </div>
  );
};

export default Sidebar;
