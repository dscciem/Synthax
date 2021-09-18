import React from "react";
import InstagramLogo from "./assets/Instagram.svg";
import LinkedInLogo from "./assets/LinkedIn.svg";
import TwitterLogo from "./assets/Twitter.svg";
import GithubLogo from "./assets/github.svg";

const Social = ({ instaUrl, twitterUrl, linkedinUrl, githubUrl }) => {
  return (
    <div className="flex items-baseline justify-center">
      {githubUrl ? (
        <a href={githubUrl} rel="noreferrer" target="_blank">
          <img className="px-5" src={GithubLogo} alt="" width="70px" />
        </a>
      ) : null}
      {instaUrl ? (
        <a href={instaUrl} rel="noreferrer" target="_blank">
          <img className="px-5" src={InstagramLogo} alt="" width="70px" />
        </a>
      ) : null}
      {linkedinUrl ? (
        <a href={linkedinUrl} rel="noreferrer" target="_blank">
          <img className="px-5" src={LinkedInLogo} alt="" width="70px" />
        </a>
      ) : null}
      {twitterUrl ? (
        <a href={twitterUrl} rel="noreferrer" target="_blank">
          <img className="px-5" src={TwitterLogo} alt="" width="70px" />
        </a>
      ) : null}
    </div>
  );
};

export default Social;
