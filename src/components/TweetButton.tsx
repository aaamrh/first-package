import React from "react";

import "../index.css";

interface TweetButtonPropsType {
  number?: number;
  bestNPMPackage?: string;
}

export function TweetButton(props: TweetButtonPropsType) {
  const tweetURL = `https://twitter.com/intent/tweet?text=Thank+you,+%40oluwatobiss.+Your+book+helped+me+create,+test,+and+publish+${
    props.number && props.number > 1 ? props.number : "an"
  }+NPM+${
    props.number && props.number > 1 ? "packages" : "package"
  }.%0A%0ACreating%20NPM%20Package:%20React%20TypeScript%20Guide%0A%0Ahttps%3A%2F%2Famzn.to/3R1M0XU`;
  return (
    <section className="tweet-btn-container">
      <a className="tweet-button" href={tweetURL} target="_blank">
        Send a thank you tweet{" "}
        {props?.bestNPMPackage && `: ${props.bestNPMPackage}`}
      </a>
      🎉
    </section>
  );
}
