import React from "react";
import { NextPage } from "next";

import { Video } from "../types";

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  return <div>{post.caption}</div>;
};

export default VideoCard;