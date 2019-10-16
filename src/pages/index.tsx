import React, { memo } from 'react'
import { graphql } from 'gatsby'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import BurgerMenu from '../components/BurgerMenu'
// import Header from './Header'
import NavMenu from '../components/NavMenu'

import IndexLayout from '../layouts'
import LatestWorks from '../components/LatestWorks'
import { navigationItemExtensions, NavigationItem } from '../models/navigation'

// import 'intersection-observer' // optional polyfill
import Observer from '@researchgate/react-intersection-observer'
import { Element } from 'react-scroll'
import { useSetNavigationItem } from '../hooks/useSetNavigationItem'

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
    title: string
    url: string
    fields: {
      slug: string
    }
    coverImage: {
      childImageSharp: {
        fluid: any
      }
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

const IndexPage: React.FC<Props> = memo(
  ({
    data: {
      allVimeoVideo: { edges }
    }
  }) => {
    const setNavigationItem = useSetNavigationItem()

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

    const handleIntersection = (event: IntersectionObserverEntry) => {
      if (event.isIntersecting) {
        setNavigationItem(event.target.id as NavigationItem)
      }
    }

    const options = {
      onChange: handleIntersection,
      root: '#scrolling-container',
      rootMargin: '0% 0% -25%'
    }

    return (
      <IndexLayout>
        <Hidden smUp>
          <BurgerMenu />
        </Hidden>
        <Container>
          {/* <Header title={data.site.siteMetadata.title} /> */}
          <Grid container>
            <Hidden mdDown>
              <Grid item md={2}>
                <NavMenu />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10}>
              <div className="section" data-anchor={NavigationItem.home}>
                <p>Section 1 (welcome to fullpage.js)</p>
                <LatestWorks items={items} />
              </div>

              {navigationItemExtensions
                .filter(({ type }) => type !== NavigationItem.home)
                .map(({ type, label }) => (
                  <Observer {...options} key={type}>
                    <Element
                      name={type}
                      id={type}
                      style={{ marginBottom: '200px' }}
                    >
                      Hello you are in section {label}
                    </Element>
                  </Observer>
                ))}
            </Grid>
          </Grid>
        </Container>
      </IndexLayout>
    )
  }
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allVimeoVideo {
      edges {
        node {
          title
          url
          fields {
            slug
          }
          coverImage {
            childImageSharp {
              id
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
    }
  }
`
