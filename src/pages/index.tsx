import React from 'react'
import { graphql } from 'gatsby'

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
import Footer from '../components/Footer'
import { navigationItemExtensions, NavigationItem } from '../models/navigation'
import AboutMe from '../components/AboutMe'

type VimeoVideoNode = {
  node: {
    id: string
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
                  <Typography component="h1">
                    Hello my name is <span>ALEXIS</span>
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
              <Typography component="h2">
                {navigationItemExtensions[NavigationItem.direction].label}
              </Typography>
              <LatestWorks items={items} />
            </Section>

            <Section name={NavigationItem.edition}>
              <Typography component="h2">
                {navigationItemExtensions[NavigationItem.edition].label}
              </Typography>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. AENEAN
              MOLESTIE MAURIS VELIT, IN ALIQUET NEQUE ELEMENTUM NEC. ETIAM SIT
              AMET MAURIS NON TELLUS LAOREET PORTTITOR. INTEGER QUIS PLACERAT
              ERAT, NEC FAUCIBUS DUI.
            </Section>

            <Section name={NavigationItem.aboutMe}>
              <Typography component="h2">
                {navigationItemExtensions[NavigationItem.aboutMe].label}
              </Typography>
              <AboutMe />
            </Section>

            <Section name={NavigationItem.contact}>
              <Typography component="h2">
                {navigationItemExtensions[NavigationItem.contact].label}
              </Typography>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. AENEAN
              MOLESTIE MAURIS VELIT, IN ALIQUET NEQUE ELEMENTUM NEC. ETIAM SIT
              AMET MAURIS NON TELLUS LAOREET PORTTITOR. INTEGER QUIS PLACERAT
              ERAT, NEC FAUCIBUS DUI.
            </Section>
          </Grid>
        </Grid>
      </Container>
      <Footer />
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
