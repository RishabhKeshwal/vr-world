import React from "react";
import { IoClose } from "react-icons/io5";

const PopupPlayer = ({ isPlay, togglePlay }) => {
  return (
    <>
      {isPlay && (
        <div className="fixed z-[9999] top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm">
          <div className="absolute w-full sm:max-w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white dark:bg-dark p-5 rounded-lg shadow-sm m-3">
              {/* Header section */}
              <div className="flex items-center justify-between pb-3">
                <h1 className="text-2xl font-semibold">Metaverse</h1>
                <IoClose
                  onClick={togglePlay}
                  className="text-4xl cursor-pointer hover:scale-110 duration-300"
                />
              </div>

              {/* Video Player Section */}
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/joBfw59FGBQ?si=nsXpIznPQ_RSYrSS"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupPlayer;
