import React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'

interface WorkTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    vimeoVideo: {
      thumbnail: {
        large: string
        medium: string
        small: string
      }
      title: string
      url: string
    }
  }
}

const WorkTemplate: React.SFC<WorkTemplateProps> = ({
  data: { vimeoVideo }
}) => (
  <IndexLayout>
    <h1>{vimeoVideo.title}</h1>
    <p>The URL: {vimeoVideo.url}</p>
    <img src={vimeoVideo.thumbnail.medium} alt={vimeoVideo.title} />
  </IndexLayout>
)

export const query = graphql`
  query WorkTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    vimeoVideo(fields: { slug: { eq: $slug } }) {
      thumbnail {
        large
        medium
        small
      }
      title
      url
    }
  }
`

export default WorkTemplate
