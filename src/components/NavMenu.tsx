import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { navigationItemExtensions, NavigationItem } from '../models/navigation'
import * as actionCreators from '../state/actions/navigation-item'
import { State } from '../state/state'

type StateProps = {
  navigationItem: NavigationItem
}

type DispatchProps = {
  setNavigationItem: (navigationItem: NavigationItem) => void
}

type OwnProps = {}

type Props = OwnProps & StateProps & DispatchProps

const NavMenu: React.FunctionComponent<Props> = ({
  navigationItem,
  setNavigationItem
}) => {
  const handleListItemClick = (type: NavigationItem) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e && e.preventDefault()
    setNavigationItem(type)
  }

  return (
    <div style={{ position: 'sticky', top: 0 }}>
      <List>
        {navigationItemExtensions.map(({ type, label }) => {
          return (
            <ListItem
              key={type}
              button
              selected={navigationItem === type}
              onClick={handleListItemClick(type)}
            >
              <ListItemText primary={label} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  navigationItem: state.navigationItem
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(actionCreators, dispatch)

const NavMenuWrapper = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(NavMenu)

export default NavMenuWrapper
