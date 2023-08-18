"use client";
import React, { useEffect, useState } from "react";
import DeepLink from "./deepLink";
import logo from "../Images/logo.jpeg";
import loadingImg from "../Images/loadingImg.svg";
import GlossaryImage from "../Images/GlossaryImage.svg";
import Image from "next/image";
function DeepLinkComponent() {
  const [userAgentData, setUserAgentData] = useState("");
  const [url, setUrl] = useState();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const param1Value = queryParams.get("param1");
    console.log("param1Value", param1Value);
    setUrl(param1Value);
    const userAgent = navigator.userAgent;
    console.log("User Agent:", userAgent);
    setUserAgentData(userAgent);
  }, [url]);
  return (
    <div className="glossaryImage">
      <div className="banner-img">
        <Image src={GlossaryImage} />
      </div>
      <div className="glossary-cont">
        <div className="site-logo">
          <Image
            src={logo}
            alt="Picture of the author"
            width="150px"
            height="100px"
            style={{
              width: "70px",
              height: "70px",
              border: "skyblue solid 2px",
              borderRadius: "70px",
            }}
          />
        </div>
        <div className="loading-img">
          <Image src={loadingImg} />
        </div>
        <h5>Deep Link</h5>
      </div>
      <DeepLink userAgentData={userAgentData} url={url} />
    </div>
  );
}

export default DeepLinkComponent;
