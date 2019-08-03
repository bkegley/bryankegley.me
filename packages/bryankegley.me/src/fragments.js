import {graphql} from 'gatsby'

export const MdxBase = graphql`
  fragment MdxBase on Mdx {
    id
    timeToRead
    frontmatter {
      title
      summary
      tags
    }
    body
  }
`

export const NoteFragment = graphql`
  fragment NoteFragment on Mdx {
    ...MdxBase
    frontmatter {
      date
    }
  }
`

export const CaseStudyFragment = graphql`
  fragment CaseStudyFragment on Mdx {
    ...MdxBase
    frontmatter {
      organization
    }
  }
`
