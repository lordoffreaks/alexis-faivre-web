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
import Section from '../components/Section'
import { navigationItemExtensions, NavigationItem } from '../models/navigation'

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
              <Section name={NavigationItem.home}>
                <LatestWorks items={items} />
              </Section>

              <Section name={NavigationItem.direction}>
                Hello you are in section{' '}
                {navigationItemExtensions[NavigationItem.direction].label}
              </Section>

              <Section name={NavigationItem.edition}>
                Hello you are in section{' '}
                {navigationItemExtensions[NavigationItem.edition].label}
              </Section>

              <Section name={NavigationItem.aboutMe}>
                Hello you are in section{' '}
                {navigationItemExtensions[NavigationItem.aboutMe].label}
              </Section>

              <Section name={NavigationItem.contact}>
                Hello you are in section{' '}
                {navigationItemExtensions[NavigationItem.contact].label}
              </Section>
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
