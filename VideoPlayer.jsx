import React, { useEffect, useRef, useState } from "react";

const resultUrl =
  "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C662157d0333a7152ea88ae88/tlk_fO03VLNhvdflvtR-kjOhA/1728554732369.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1728641135&Signature=bP9IAnkjcJTAUpuuJCkO648BwcY%3D";

const subtitleUrl =
  "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C662157d0333a7152ea88ae88/tlk_fO03VLNhvdflvtR-kjOhA/1728554732369.srt?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1728641143&Signature=P%2Bp%2BunNCbbLpgDUIiln3gvOyZiI%3D";

const vttUrl =
  "data:text/vtt;charset=utf-8,WEBVTT%0A%0A00%3A00%3A00.009%20--%3E%2000%3A00%3A01.429%0AHello.%20How%20is%20your%20day%20today%3F";

const VideoPlayer = ({ videoUrl, srtUrl }) => {
  return (
    <div>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        <track
          src={srtUrl}
          label="English"
          kind="subtitles"
          srcLang="en"
          default={true}
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
