import React from "react";

export const CTA = () => {
  return (
    <div>
      <div className="bg-gray-900 max-w-xl flex flex-col items-center mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="inline text-3xl font-bold tracking-tight text-primary sm:block sm:text-4xl">
          Let's stay in touch!
        </h2>
        <p className="inline text-xl font-bold tracking-tight sm:block sm:text-2xl">
          Follow me on
          <a
            className="ml-1 text-secondary hover:underline"
            href="https://bkeg.me/twitter"
            target="_blank"
          >
            twitter
          </a>
        </p>
      </div>
    </div>
  );
};
