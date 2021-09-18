import React from "react";
import InstagramLogo from "./assets/Instagram.svg";
import LinkedInLogo from "./assets/LinkedIn.svg";
import TwitterLogo from "./assets/Twitter.svg";

const Social = () => {
  return (
    <div className="flex items-baseline justify-end">
      <img className="pr-10" src={InstagramLogo} alt="" width="70px" />
      <img className="pr-10" src={LinkedInLogo} alt="" width="70px" />
      <img className="pr-10" src={TwitterLogo} alt="" width="70px" />
    </div>
  );
};

export default Social;
