import React from "react";
export function TweetButton() {
  const tweetURL =
    "https://twitter.com/intent/tweet?text=Thank+you,+%40oluwatobiss.+Your+book+helped+me+create,+test,+and+publish+an+NPM+package.%0A%0ACreating%20NPM%20Package:%20React%20TypeScript%20Guide%0A%0Ahttps%3A%2F%2Famzn.to/3R1M0XU";
  return (
    <div>
      <a href={tweetURL} target="_blank">
        Send a thank you tweet
      </a>
    </div>
  );
}
