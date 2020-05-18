import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author {
            name
            description
          }
          sitUrl
          social {
            twitter
            github
            twitch
          }
        }
      }
    }
  `);
  const {
    title: siteTitle,
    author: { name, description: siteDescription },
    social: { twitter, github, twitch },
  } = siteMetadata;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      defaultTitle={siteTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <meta name="description" content={description ?? siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description ?? siteDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title ?? siteTitle} />
      <meta
        name="twitter:description"
        content={description ?? siteDescription}
      />
    </Helmet>
  );
};
