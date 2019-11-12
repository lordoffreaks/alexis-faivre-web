import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

import BurgerMenu from '../components/BurgerMenu'
import Sidebar from '../components/Sidebar'

import IndexLayout from '../layouts'
import Header from '../components/Header'
import LatestWorks from '../components/LatestWorks'
import Section from '../components/Section'
import { NavigationItem } from '../models/navigation'
import { partition } from '../helpers'
import Contact from '../components/Contact'

type VimeoVideoNode = {
  node: {
    id: number
    title: string
    url: string
    tags: Array<{
      name: string
      tag: string
    }>
    fields: {
      slug: string
    }
    coverImage: {
      childImageSharp: {
        fluid: FluidObject
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

const IndexPage: React.FC<Props> = ({
  data: {
    allVimeoVideo: { edges }
  }
}) => {
  const items = edges.map(({ node }) => {
    const {
      fields: { slug },
      id,
      ...rest
    } = node
    return {
      id: Number(id),
      slug,
      ...rest
    }
  })

  const [direction, edition] = partition(items, item => {
    return item.tags.some(tag => tag.name === 'direccion')
  })

  return (
    <IndexLayout>
      <Hidden smUp>
        <BurgerMenu />
      </Hidden>
      <Container>
        <Header title={`Web of Alexis Faivre`} />
        <Grid container>
          <Hidden smDown>
            <Grid item sm={2}>
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10}>
            <Section name={NavigationItem.home}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" style={{ fontSize: '1.75em' }}>
                    HELLO MY NAME IS{' '}
                    <Typography
                      variant="h1"
                      style={{
                        marginTop: '.25em',
                        lineHeight: '.7em'
                      }}
                    >
                      ALEXIS{' '}
                      <span
                        style={{
                          display: 'block',
                          color: 'rgb(104, 166, 147)',
                          lineHeight: 1
                        }}
                      >
                        FAIVRE
                      </span>
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    aenean molestie mauris velit, in aliquet neque elementum
                    nec. etiam sit amet mauris non tellus laoreet porttitor.
                    integer quis placerat erat, nec faucibus dui.
                  </Typography>
                </Grid>
              </Grid>
            </Section>

            <Section name={NavigationItem.direction}>
              <Typography variant="h2" style={{ marginBottom: '1em' }}>
                DIRECTION
              </Typography>
              <LatestWorks items={direction} />
            </Section>

            <Section name={NavigationItem.edition}>
              <Typography variant="h2" style={{ marginBottom: '1em' }}>
                EDITION
              </Typography>
              <LatestWorks items={edition} />
            </Section>

            <Section name={NavigationItem.contact}>
              <Contact />
            </Section>
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </IndexLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allVimeoVideo {
      edges {
        node {
          id
          title
          url
          fields {
            slug
          }
          tags {
            name
            tag
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
