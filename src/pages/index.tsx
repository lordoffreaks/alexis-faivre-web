import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import SectionHome from '../components/SectionHome'
import IndexLayout from '../layouts'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import BurgerMenu from '../components/BurgerMenu'
import LatestWorks from '../components/LatestWorks'
import { partition } from '../helpers'
import Contact from '../components/Contact'
import Section from '../components/Section'
import { NavigationItem } from '../models/navigation'
import Typography from '@material-ui/core/Typography'

interface VimeoVideoNode {
  node: {
    id: number
    title: string
    url: string
    tags: {
      name: string
      tag: string
    }[]
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

interface Props {
  data: {
    allVimeoVideo: {
      edges: VimeoVideoNode[]
    }
  }
}

const FullPage: React.FC<Props> = ({
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
        <Header title="Web of Alexis Faivre" />
        <Grid container>
          <Hidden smDown>
            <Grid item sm={2}>
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10}>
            <Section name={NavigationItem.home}>
              <SectionHome />
            </Section>
            <Section name={NavigationItem.direction}>
              <Typography variant="h2">DIRECTION</Typography>
              <LatestWorks items={direction} />
            </Section>
            <Section name={NavigationItem.edition}>
              <Typography variant="h2">EDITION</Typography>
              <LatestWorks items={edition} />
            </Section>
            <Section name={NavigationItem.contact}>
              <Contact />
            </Section>
          </Grid>
        </Grid>
      </Container>
    </IndexLayout>
  )
}

export default FullPage

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
