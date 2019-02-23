import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
  const data = useStaticQuery(imageQuery)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const imageQuery = graphql`
  query {
    placeholderImage: file(relativePath: {eq: "gatsby-astronaut.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Image
