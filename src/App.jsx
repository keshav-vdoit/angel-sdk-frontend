import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import VideoPlayer from "../VideoPlayer";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [text, setText] = useState("hello how is your day today");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(import.meta.env.VITE_APP_SDK_URL, {
        input: text,
      });
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(data);
  // const videoUrl =
  //   "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C662157d0333a7152ea88ae88/tlk_ndVsmysolcgMj8M196-B2/1728539424046.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1728625826&Signature=OUOEh7Luvrwl2fEQUluMybv%2BzHo%3D";

  // const srtUrl =
  //   "https://d-id-talks-prod.s3.us-west-2.amazonaws.com/auth0%7C662157d0333a7152ea88ae88/tlk_ndVsmysolcgMj8M196-B2/1728539424046.srt?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1728625832&Signature=ZTGF9PFn1TWpv1MGH0A05FHnIkg%3D";
  return (
    <>
      <img
        src="https://d2w24n4g34usfg.cloudfront.net/angelai/realty/realty-desktop-bg.webp"
        className="reality-banner-image"
        alt=""
      />
      <div className="home ">
        {/* header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo w-fit">
            <img src="/angelai-brandlogo.webp" alt="" className="scale-75" />
            {/* <p className="text-white text-center text-sm">Nothing is beyond Reach™</p> */}
          </div>
          {/* heading */}
          <h1 className="text-white text-3xl font-medium">
            Angel AI - DID Demo{" "}
          </h1>
          <div className=""></div>
          <div className=""></div>
        </div>

        {/* content */}
        <div className="flex flex-col md:flex-row justify-center md:gap-40">
          {/* controls */}
          <div className=" flex flex-col gap-10 items-start my-20">
            <label htmlFor="prompt" className="text-white text-2xl">
              Enter your prompt
            </label>
            <textarea
              name="prompt"
              id="prompt"
              cols={35}
              rows={7}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="rounded p-2 text-lg"
              placeholder="Enter text here"
            />

            <button
              className="rounded-lg border-white border-2 text-white p-1 px-8 text-lg font-semibold hover:bg-white/25 hover:border-violet-400"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* video output */}
          <div className="w-96 my-auto">
            {/* <video
              height={300}
              controls
              src="/1728539424046.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1728625826&Signature=OUOEh7Luvrwl2fEQUluMybv%2BzHo%3D"
            ></video> */}
            {loading ? (
              <p className="text-white text-4xl">Loading...</p>
            ) : (
              <VideoPlayer videoUrl={data?.resultUrl} srtUrl={data?.vttUrl} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
