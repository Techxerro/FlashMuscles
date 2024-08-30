import React from "react";
import "./video.css";

const VideoPlayer = () => {
  return (
    <section className="mx-auto py-20">
      <div className="mx-auto video-responsive overflow-hidden pb-[45%] relative h-0 w-[92%]">
        {/* <iframe
        className="h-full w-full absolute top-0 left-0"
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=zIvKigQ9cVY"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe> */}
        <iframe
          className="h-full w-full absolute top-0 left-0"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2aX5awVQPQk?si=kgCz9wYGoxL2zM-L"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div class="container1">
        <div class="horizontal-scrolling-items">
          <div class="horizontal-scrolling-items__item text-xl font-normal font-body">
            Here is some horizontally scrolling text used for a tutorial. It
            will loop smoothly.&nbsp
          </div>
          <div class="horizontal-scrolling-items__item text-xl font-normal font-body">
            Here is some horizontally scrolling text used for a tutorial. It
            will loop smoothly.&nbsp
          </div>
          <div class="horizontal-scrolling-items__item text-xl font-normal font-body">
            Here is some horizontally scrolling text used for a tutorial. It
            will loop smoothly.&nbsp
          </div>
          <div class="horizontal-scrolling-items__item text-xl font-normal font-body">
            Here is some horizontally scrolling text used for a tutorial. It
            will loop smoothly.&nbsp
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
