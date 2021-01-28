import React from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container flex flex-col justify-center px-6 mx-auto wrapper lg:px-0">
        <div className="py-10 mx-auto">
          <Logo />
        </div>
        <div className="flex items-center pb-10 mx-auto text-sm">
          <a
            className="flex mr-6 item-center"
            href="https://twitter.com/bkegley"
          >
            <Icon
              className="mr-2 text-secondary"
              height={18}
              width={18}
              variant="twitter"
            />
            <span>Twitter</span>
          </a>
          <a
            className="flex mr-6 item-center"
            href="https://github.com/bkegley"
          >
            <Icon
              className="mr-2 text-secondary"
              height={18}
              width={18}
              variant="github"
            />
            <span>Github</span>
          </a>
          <a className="flex item-center" href="https://twitch.tv/bjkegley">
            <Icon
              className="mr-2 text-secondary"
              height={18}
              width={18}
              variant="twitch"
            />
            <span>Twitch</span>
          </a>
        </div>
      </div>
    </div>
  );
};
