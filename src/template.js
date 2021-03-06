import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <div
      className="code-block-test"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
export const pageQuery = graphql`
  query {
    markdownRemark {
      html
    }
  }
`
