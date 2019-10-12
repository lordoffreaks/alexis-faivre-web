import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import BurgerMenu from '../components/BurgerMenu'
import { Hidden } from '@material-ui/core'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Hidden smUp>
          <BurgerMenu />
        </Hidden>
        <Container>
          <Header title={data.site.siteMetadata.title} />
          <LayoutMain>{children}</LayoutMain>
        </Container>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
