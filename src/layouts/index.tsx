import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import FullPage from '../components/FullPage'
import LayoutRoot from '../components/LayoutRoot'
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage'

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
        {children}
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
