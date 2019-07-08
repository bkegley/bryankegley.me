import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import {graphql} from 'gatsby'

const CaseStudy = ({data}) => {
  console.log({data})
  return (
    <div>
      <h1>Example</h1>
      <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query CaseStudyQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      timeToRead
      frontmatter {
        title
        tags
      }
      code {
        body
      }
    }
  }
`

export default CaseStudy
