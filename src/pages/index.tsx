import React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import LatestWorks from '../components/LatestWorks'

type AllMarkdownRemarkNode = {
  node: {
    excerpt: string
    fields: {
      slug: string
      thumbnail: string
    }
    frontmatter: {
      title: string
      url: string
    }
  }
}

type VimeoVideoNode = {
  node: {
    thumbnail: {
      large: string
      medium: string
      small: string
    }
    title: string
    url: string
    fields: {
      slug: string
    }
  }
}

type Props = {
  data: {
    allVimeoVideo: {
      edges: Array<VimeoVideoNode>
    }
  }
}

const IndexPage: React.FC<Props> = ({
  data: {
    allVimeoVideo: { edges }
  }
}) => {
  const items = edges.map(({ node }) => {
    const {
      fields: { slug },
      ...rest
    } = node
    return {
      slug,
      ...rest
    }
  })

  return (
    <IndexLayout>
      <LatestWorks items={items} />
    </IndexLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allVimeoVideo {
      edges {
        node {
          thumbnail {
            large
            medium
            small
          }
          title
          url
          fields {
            slug
          }
        }
      }
    }
  }
`
