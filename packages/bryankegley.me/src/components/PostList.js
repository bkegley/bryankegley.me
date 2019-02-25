import React from 'react'
import {Box} from 'rebass'
import PostSnippet from './PostSnippet'

const PostList = ({postEdges}) => {
  const postArray = postEdges.map(({node}) => {
    return (
      <Box my={4} key={node.id}>
        <PostSnippet post={node} />
      </Box>
    )
  })
  return <>{postArray}</>
}

export default PostList
