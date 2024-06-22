import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCommentDots, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  /***
   * What we need
   * Profile,
   * Name,
   * tagline,
   * image
   * comments
   * likes
   * description
   */
  return (
    <div className="post rounded-default shadow-default py-6 px-5 flex flex-col gap-2">
      <div className="post-header">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full w-[50px]"
              alt="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <div>
              <h2>Segun Adebayo</h2>
              <p>Creator, Chakra UI</p>
            </div>
          </div>

          <button>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
      <div className="post-body">
        <img
          className="rounded-default object-cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />
      </div>
      <div className="post-actions">
        <button>
          <FontAwesomeIcon icon={faHeart} /> Like
        </button>
        <button>
          <FontAwesomeIcon icon={faCommentDots} />
          Comment
        </button>
      </div>
      <div className="post-details">
        <span>Liked by and 50 others</span>
        <div className="text-colorPrimary flex items-center gap-1">
          <span>#tag1</span>
          <span>#tag2</span>
          <span>#tag3</span>
        </div>
      </div>
      <div className="post-description">
        <p>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </p>
      </div>
    </div>
  );
};

export default Post;
