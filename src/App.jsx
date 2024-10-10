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
          <h1 className="text-white text-3xl font-medium font-mono">
            Angel AI - DID Demo{" "}
          </h1>
          <div className=""></div>
          <div className=""></div>
        </div>

        {/* content */}
        <div className="flex flex-col md:flex-row justify-between px-40">
          {/* controls */}
          <div className=" flex flex-col gap-10 items-start my-20">
            <label htmlFor="prompt" className="text-white text-2xl">
              Enter your prompt
            </label>
            <textarea
              name="prompt"
              id="prompt"
              cols={60}
              rows={5}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="rounded p-4 text-lg bg-violet-950 text-white"
              style={{ resize: "none", scrollbarWidth: "none" }}
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
          <div className="">
            {/* <video
              height={300}
              controls
              src="/1728539424046.mp4?AWSAccessKeyId=AKIA5CUMPJBIK65W6FGA&Expires=1728625826&Signature=OUOEh7Luvrwl2fEQUluMybv%2BzHo%3D"
            ></video> */}
            {loading ? (
              <div className="text-white text-4xl w-96 h-full flex justify-center items-center">
                <Svg />
              </div>
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

const Svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    height="3em"
    viewBox="0 0 24 24"
  >
    <circle cx={12} cy={3} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle0"
        attributeName="r"
        begin="0;svgSpinners6DotsScaleMiddle2.end-0.5s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={16.5} cy={4.21} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle1"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle0.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={7.5} cy={4.21} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle2"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle4.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={19.79} cy={7.5} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle3"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle1.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={4.21} cy={7.5} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle4"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle6.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={21} cy={12} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle5"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle3.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={3} cy={12} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle6"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle8.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={19.79} cy={16.5} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle7"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle5.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={4.21} cy={16.5} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle8"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddlea.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={16.5} cy={19.79} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddle9"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle7.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={7.5} cy={19.79} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddlea"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddleb.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
    <circle cx={12} cy={21} r={0} fill="currentColor">
      <animate
        id="svgSpinners6DotsScaleMiddleb"
        attributeName="r"
        begin="svgSpinners6DotsScaleMiddle9.begin+0.1s"
        calcMode="spline"
        dur="0.6s"
        keySplines=".27,.42,.37,.99;.53,0,.61,.73"
        values="0;2;0"
      ></animate>
    </circle>
  </svg>
);
