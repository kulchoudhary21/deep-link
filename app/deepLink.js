"use client";
import React, { useEffect } from "react";
import getUrl from "../utils/constant";
const DeepLink = ({ userAgentData, url }) => {
  useEffect(() => {
    checkSystem();
  }, [url]);
  const checkSystem = () => {
    if (url) {
      userAgentData;
      if (
        userAgentData.match(/iPad/i) ||
        userAgentData.match(/iPhone/i) ||
        userAgentData.match(/iPod/i)
      ) {
        window.location.href = `${getUrl.appStoreLink}/${url}`;
        console.log("IOS");
      } else if (userAgentData.match(/Android/i)) {
        window.location.href = `${getUrl.playStoreLink}?id=${url}&hl=en_US`;
        console.log("Android");
      } else {
        // window.location.href = `${getUrl.playStoreLink}?id=${url}&hl=en_US`;
        // window.location.href = `${getUrl.appStoreLink}${url}`;
        window.open(url, "_blank");
        console.log("Web ", url);
      }
    }
  };
  return (
    <div>
    </div>
  );
};

export default DeepLink;
