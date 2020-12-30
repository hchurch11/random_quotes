import React from "react";

export default function ShareButtons() {
  return (
    <div className="ShareButtons">
      <button
        className="btn btn-info"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_top"
        href="twitter.com/intent/tweet"
      >
        {" "}
        Tweet
      </button>
      <button
        className="btn btn-info"
        id="linkedin-share"
        title="Share to LinkedIn!"
        target="_top"
        href="https://developer.linkedin.com/documents/share-api"
      >
        LinkedIn
      </button>
      <button
        className="btn btn-info"
        id="facebook-share"
        title="Share to facebook!"
        target="_top"
        href="#"
      >
        facebook
      </button>
    </div>
  );
}
