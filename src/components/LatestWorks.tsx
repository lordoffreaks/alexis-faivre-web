import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavigationItem } from '../models/navigation'
import * as actionCreators from '../state/actions/navigation-item'
import { State } from '../state/state'
import playIcon from '../svg/play.svg'

interface LatestWork {
  title: string
  url: string
  slug: string
  coverImage: {
    childImageSharp: {
      fluid: any
    }
  }
}

interface OwnProps {
  items: Array<LatestWork>
}

type StateProps = {}

type DispatchProps = {
  setNavigationItem: (navigationItem: NavigationItem) => void
}

type Props = OwnProps & StateProps & DispatchProps

const LatestWorks: React.FC<Props> = ({ items, setNavigationItem }) => {
  return (
    <>
      <h2>LATEST WORKS</h2>
      <Grid container spacing={3}>
        {items.map(item => {
          return (
            <Grid key={item.slug} item xs={12} sm={6}>
              <Typography component="div">
                <Link
                  onClick={_ => setNavigationItem(NavigationItem.edition)}
                  to={`/${item.slug}`}
                  style={{ position: 'relative', display: 'block' }}
                >
                  <img
                    style={{
                      zIndex: 1,
                      margin: 'auto',
                      position: 'absolute',
                      top: '0',
                      bottom: '0' /* vertical center */,
                      left: '0',
                      right: '0' /* horizontal center */
                    }}
                    src={playIcon}
                  />
                  <Img fluid={item.coverImage.childImageSharp.fluid} />
                </Link>
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

const mapStateToProps = (state: State) => ({
  navigationItem: state.navigationItem
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(actionCreators, dispatch)

const LatestWorksWrapper = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(LatestWorks)

export default LatestWorksWrapper
