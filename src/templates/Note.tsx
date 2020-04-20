import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PostTemplateProps } from "./Post";

interface NoteProps extends PostTemplateProps {}

const Note = ({ data }: NoteProps) => {
  return (
    <div>
      <h1>This is a note</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  );
};

export default Note;
