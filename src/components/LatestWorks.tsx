import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Link } from 'gatsby'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavigationItem } from '../models/navigation'
import * as actionCreators from '../state/actions/navigation-item'
import { State } from '../state/state'

interface LatestWork {
  thumbnail: {
    large: string
    medium: string
    small: string
  }
  title: string
  url: string
  slug: string
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
            <Grid item xs={12} sm={6}>
              <Typography component="p">
                <Link
                  onClick={_ => setNavigationItem(NavigationItem.edition)}
                  to={`/${item.slug}`}
                >
                  <CardMedia
                    style={{
                      height: 0,
                      paddingTop: '56.25%' // 16:9
                    }}
                    image={item.thumbnail.medium}
                    title={item.title}
                  />
                  {/* <img src={item.thumbnail.medium} alt={item.title} /> */}
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
