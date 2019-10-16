import React, { memo } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import BurgerMenu from './BurgerMenu'
// import Header from './Header'
import NavMenu from './NavMenu'
import { navigationItemExtensions } from '../models/navigation'

// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage'

const FullPage: React.FunctionComponent<{}> = memo(({ children }) => {
  return (
    <ReactFullpage
      debug
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      scrollBar={true}
      // onLeave={(origin: any, destination: any, direction: any) => {
      //   console.log('onLeave event', { origin, destination, direction })
      // }}
      anchors={navigationItemExtensions.map(({ type }) => type)}
      sectionsColor={navigationItemExtensions.map(({ color }) => color)}
      scrollingSpeed={1000} /* Options here */
      render={({ fullpageApi }: any) => {
        return (
          <ReactFullpage.Wrapper>
            <Hidden smUp>
              <BurgerMenu api={fullpageApi} />
            </Hidden>
            <Container>
              {/* <Header title={data.site.siteMetadata.title} /> */}
              <Grid container>
                <Hidden mdDown>
                  <Grid item md={2}>
                    <NavMenu api={fullpageApi} />
                  </Grid>
                </Hidden>
                <Grid item xs={12} md={10}>
                  {children}
                </Grid>
              </Grid>
            </Container>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
})

export default FullPage
