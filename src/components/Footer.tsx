import React from "react";
import { Icon } from "./Icon";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container wrapper mx-auto flex flex-col justify-center px-6 lg:px-0">
        <div className="mx-auto py-10" py-10>
          b - k
        </div>
        <div className="flex items-center mx-auto text-sm pb-10">
          <a
            className="flex item-center mr-6"
            href="https://twitter.com/bkegley"
          >
            <Icon
              className="text-secondary mr-2"
              height={18}
              width={18}
              variant="twitter"
            />
            <span>Twitter</span>
          </a>
          <a
            className="flex item-center mr-6"
            href="https://github.com/bkegley"
          >
            <Icon
              className="text-secondary mr-2"
              height={18}
              width={18}
              variant="github"
            />
            <span>Github</span>
          </a>
          <a className="flex item-center" href="https://twitch.tv/bjkegley">
            <Icon
              className="text-secondary mr-2"
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
