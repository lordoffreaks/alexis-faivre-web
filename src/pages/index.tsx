import React from 'react'
import { graphql } from 'gatsby'

import IndexLayout from '../layouts'
import LatestWorks from '../components/LatestWorks'
import { navigationItemExtensions, NavigationItem } from '../models/navigation'

// type AllMarkdownRemarkNode = {
//   node: {
//     excerpt: string
//     fields: {
//       slug: string
//       thumbnail: string
//     }
//     frontmatter: {
//       title: string
//       url: string
//     }
//   }
// }

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
      <div className="section" data-anchor={NavigationItem.home}>
        <p>Section 1 (welcome to fullpage.js)</p>
        <LatestWorks items={items} />
      </div>

      {navigationItemExtensions
        .filter(({ type }) => type !== NavigationItem.home)
        .map(({ type, label }) => (
          <div className="section" data-anchor={type} key={type}>
            Hello you are in section {label}
          </div>
        ))}
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
