import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";


const ChannelInfo = ({ video }) => {


  return (
    <div className="flex justify-between items center">
      {/* sol */}
      <div className="flex items-center gap-4">
        <img
          src={video.thumbnail[0].url}
          alt="logo"
          className="rounded-full w-12 h-12"
        />

        <div>
          <h4>{video.channelTitle}</h4>
          <p>{millify(video.viewCount )+" subscribes"}</p>
        </div>

        <button className="bg-white text-black px-3 h-9 rounded-full hover:bg-gray-400 transition">Abone Ol</button>
        {/* sağ */}
      </div>

      <div className="flex items-center bg-[#272727] rounded-full">
        <div className="py-2 px-6 border-r">
          <AiFillLike />
        </div>

        <div className="py-2 px-6">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
